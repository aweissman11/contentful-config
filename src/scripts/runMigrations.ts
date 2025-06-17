import { type RunMigrationConfig } from 'contentful-migration';
import 'dotenv/config';
import { models } from '../models/index.js';
import { runMigrations } from './migrate.js';
import type { AsyncMigrationFunction } from '../types/index.js';

const options: RunMigrationConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT!,
  yes: true,
  migrationFunction: () => {},
};

export const migrationCallback: AsyncMigrationFunction = async ({
  models,
  migration,
  context,
}): Promise<void> => {
  console.log('Running migration function...');

  // migration functions go here
  const modelIds = models?.map((m) => m.id);
  console.log('Models to migrate:', modelIds);
};

runMigrations({
  models,
  options,
  migrationCallback,
})
  .then(() => {
    console.log('Migration completed successfully.');
  })
  .catch((error) => {
    console.error('Migration failed:', error);
  });
