import type { ContentModel } from "@/types";

export const simpleHero:ContentModel = {
  "id": "simpleHero",
  "name": "Simple Hero",
  "description": "Content type for a simple hero section with a title and subtitle.",
  "displayField": "internalTitle",
  "fields": [
    {
      "id": "internalTitle",
      "name": "Internal Title",
      "type": "Symbol",
      "required": true,
      "validations": [],
      "localized": false,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "content",
      "name": "Content",
      "type": "Link",
      "linkType": "Entry",
      "required": true,
      "validations": [
        {
          "linkContentType": [
            "generalContent"
          ]
        }
      ],
      "localized": false,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "heroType",
      "name": "Hero Type",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "in": [
            "simple",
            "complex"
          ]
        }
      ],
      "localized": false,
      "disabled": false,
      "omitted": false,
      "defaultValue": {
        "en-US": "simple"
      }
    }
  ],
  "configureEntryEditors": [
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "singleLine",
      "settings": {
        "fieldId": "internalTitle"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "entryLinkEditor",
      "settings": {
        "fieldId": "content"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "dropdown",
      "settings": {
        "fieldId": "heroType"
      }
    }
  ]
};
