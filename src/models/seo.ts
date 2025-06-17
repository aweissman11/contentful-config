import type { ContentModel } from "@/types";

export const seo:ContentModel = {
  "id": "seo",
  "name": "SEO",
  "description": "Metadata for Search Engine Optimization",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "required": true,
      "validations": [],
      "localized": true,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "description",
      "name": "Description",
      "type": "Text",
      "required": true,
      "validations": [],
      "localized": true,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "ogDescription",
      "name": "OG Description",
      "type": "Text",
      "required": false,
      "validations": [],
      "localized": true,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "image",
      "name": "Image",
      "type": "Link",
      "linkType": "Asset",
      "required": true,
      "validations": [],
      "localized": true,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "canonicalUrl",
      "name": "Canonical URL",
      "type": "Symbol",
      "required": false,
      "validations": [
        {
          "unique": true,
          "message": "This URL must be unique across the site."
        }
      ],
      "localized": true,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "noIndex",
      "name": "No Index",
      "type": "Boolean",
      "required": false,
      "validations": [],
      "localized": false,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "noFollow",
      "name": "No Follow",
      "type": "Boolean",
      "required": false,
      "validations": [],
      "localized": false,
      "disabled": false,
      "omitted": false
    }
  ],
  "configureEntryEditors": [
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "singleLine",
      "settings": {
        "fieldId": "title"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "markdown",
      "settings": {
        "fieldId": "description"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "markdown",
      "settings": {
        "fieldId": "ogDescription"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "assetLinkEditor",
      "settings": {
        "fieldId": "image"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "singleLine",
      "settings": {
        "fieldId": "canonicalUrl"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "boolean",
      "settings": {
        "fieldId": "noIndex"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "boolean",
      "settings": {
        "fieldId": "noFollow"
      }
    }
  ]
};
