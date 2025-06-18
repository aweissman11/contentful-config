// Fix import for contentful-management to support both CJS and ESM
import contentfulManagement from 'contentful-management';
import 'dotenv/config';
import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const fieldDefaults = {
  omitted: false,
  disabled: false,
  required: false,
  localized: false,
  allowedResources: undefined,
  deleted: undefined,
  linkType: undefined,
  defaultValue: undefined,
};

// Detect ESM at runtime
const isESM = typeof import.meta !== 'undefined' && !!import.meta.url;

export const syncContentfulToLocal: SyncContentfulToLocal = async ({
  modelsBasePath,
} = {}): Promise<void> => {
  console.log('Running sync function...');
  const createClient = contentfulManagement.createClient;
  const client = createClient(
    {
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
    },
    {
      type: 'plain',
      defaults: {
        spaceId: process.env.CONTENTFUL_SPACE_ID!,
        environmentId: process.env.CONTENTFUL_ENVIRONMENT!,
      },
    },
  );

  const contentModels = (
    await client.contentType.getMany({ query: { limit: 200 } })
  ).items;

  const editorInterfaces = (
    await client.editorInterface.getMany({
      query: { limit: 200 },
    })
  ).items;

  // Patch: Define __dirname for ESM compatibility
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  for (const model of contentModels) {
    console.log(`Processing model: ${model.sys.id}`);

    const editorLayout = editorInterfaces.find(
      (ei) => ei.sys.contentType.sys.id === model.sys.id,
    );

    // get local model from the file system
    let localModel: ContentModel | null = null;
    try {
      const localFilePath = path.resolve(
        modelsBasePath ?? path.join(__dirname, '../models'),
        `${model.sys.id}.ts`,
      );
      // Dynamically import the local model file
      const localModule = await import(pathToFileURL(localFilePath).href);
      localModel = localModule?.[model.sys.id] ?? {};
    } catch (error) {
      console.log('error =>', error);
      console.error(`No local model for ${model.sys.id} found`);
    }

    const parsedModel: ContentModel = {
      id: model.sys.id,
      name: model.name,
      description: model.description,
      displayField: model.displayField,
      fields: model.fields
        .map((field) => ({
          ...fieldDefaults,
          id: field.id,
          name: field.name,
          type: field.type,
          linkType: field.linkType,
          allowedResources: field.allowedResources,
          required: field.required,
          validations: field.validations,
          localized: field.localized,
          disabled: field.disabled,
          omitted: field.omitted,
          deleted: field.deleted,
          defaultValue: field.defaultValue,
        }))
        .filter(Boolean) as ContentField[],
    };

    if (editorLayout?.controls?.length) {
      parsedModel.configureEntryEditors = editorLayout.controls
        ?.map((control) => {
          if (!control.widgetId) return null;

          return {
            // widgetNamespace comes back as 'builtin' when it needs to be set as 'editor-builtin'
            widgetNamespace: 'editor-builtin',
            widgetId: control.widgetId,
            settings: {
              fieldId: control.fieldId,
            },
          };
        })
        .filter(Boolean) as EntryEditor[];
    }

    const mergedModel = _.merge(localModel, parsedModel);

    // set this path from the root of the project
    const filePath = path.join(__dirname, `../models/${model.sys.id}.ts`);
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    const fileContent = `export const ${
      model.sys.id
    }:ContentModel = ${JSON.stringify(mergedModel, null, 2)};\n`;
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`Model for ${model.sys.id} written to ${filePath}`);
  }

  console.log('All models processed successfully.');

  const filePath = path.join(__dirname, `../models/index.ts`);
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }
  const fileContent = `${contentModels
    .map(
      ({ sys }) =>
        `import { ${sys.id} } from "./${sys.id}${isESM ? '.js' : ''}";`,
    )
    .join('\n')}\n\nexport const models:ContentModel[] = [${contentModels.map(
    ({ sys }) => sys.id,
  )}];\n`;
  fs.writeFileSync(filePath, fileContent, 'utf8');

  console.log('\x1b[35m', '=======================================');
  console.log('\x1b[32m', '+++++++++++++++++++++++++++++++++++++++');
  console.log('\x1b[34m', 'Sync completed successfully!');
  console.log(
    '\x1b[34m',
    '**You should probably format and commit your code now.**',
  );
  console.log('\x1b[32m', '+++++++++++++++++++++++++++++++++++++++');
  console.log('\x1b[35m', '=======================================');
};
