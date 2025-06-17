import { complexRichText } from "@/models/shared/complexRichText";
import { stylesOnlyRichText } from "@/models/shared/stylesOnlyRichText";
import type { ContentModel } from "@/types";

export const generalContent: ContentModel = {
  id: "generalContent",
  name: "General Content!",
  description: "Content type for general content blocks.",
  displayField: "internalTitle",
  fields: [
    {
      id: "internalTitle",
      name: "Internal Title",
      type: "Symbol",
      required: true,
      validations: [],
      localized: false,
      disabled: false,
      omitted: false,
      defaultValue: {
        "en-US": "HELLO",
      },
    },
    {
      id: "title",
      name: "Title",
      ...stylesOnlyRichText,
    },
    {
      id: "pretext",
      name: "Pretext",
      type: "RichText",
      required: false,
      validations: [
        {
          enabledNodeTypes: [],
        },
        {
          enabledMarks: ["bold", "italic", "underline"],
        },
      ],
      localized: false,
      disabled: false,
      omitted: false,
    },
    {
      id: "body",
      name: "Body",
      ...complexRichText,
    },
    {
      id: "asset",
      name: "Asset",
      type: "Link",
      linkType: "Asset",
      required: false,
      validations: [
        {
          linkMimetypeGroup: ["image", "video"],
        },
      ],
      localized: false,
      disabled: false,
      omitted: false,
    },
    {
      id: "cta",
      name: "Call to Action",
      type: "Link",
      linkType: "Entry",
      required: false,
      validations: [
        {
          linkContentType: ["callToAction"],
        },
      ],
      localized: false,
      disabled: false,
      omitted: false,
    },
    {
      id: "link",
      name: "Link",
      type: "Link",
      linkType: "Entry",
      required: false,
      validations: [
        {
          linkContentType: ["link"],
        },
      ],
      localized: false,
      disabled: false,
      omitted: false,
    },
    {
      id: "image",
      name: "Image",
      type: "Link",
      linkType: "Asset",
      required: false,
      validations: [],
      localized: false,
      disabled: true,
      omitted: true,
    },
  ],
  configureEntryEditors: [
    {
      widgetNamespace: "editor-builtin",
      widgetId: "singleLine",
      settings: {
        fieldId: "internalTitle",
      },
    },
    {
      widgetNamespace: "editor-builtin",
      widgetId: "richTextEditor",
      settings: {
        fieldId: "title",
      },
    },
    {
      widgetNamespace: "editor-builtin",
      widgetId: "richTextEditor",
      settings: {
        fieldId: "pretext",
      },
    },
    {
      widgetNamespace: "editor-builtin",
      widgetId: "richTextEditor",
      settings: {
        fieldId: "body",
      },
    },
    {
      widgetNamespace: "editor-builtin",
      widgetId: "assetLinkEditor",
      settings: {
        fieldId: "asset",
      },
    },
    {
      widgetNamespace: "editor-builtin",
      widgetId: "entryLinkEditor",
      settings: {
        fieldId: "cta",
      },
    },
    {
      widgetNamespace: "editor-builtin",
      widgetId: "entryLinkEditor",
      settings: {
        fieldId: "link",
      },
    },
    {
      widgetNamespace: "editor-builtin",
      widgetId: "assetLinkEditor",
      settings: {
        fieldId: "image",
      },
    },
  ],
};
