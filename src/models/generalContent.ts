import type { ContentModel } from "@/types";

export const generalContent:ContentModel = {
  "id": "generalContent",
  "name": "General Content!",
  "description": "Content type for general content blocks.",
  "displayField": "internalTitle",
  "fields": [
    {
      "omitted": false,
      "disabled": false,
      "required": true,
      "localized": false,
      "defaultValue": {
        "en-US": "HELLO"
      },
      "id": "internalTitle",
      "name": "Internal Title",
      "type": "Symbol",
      "validations": []
    },
    {
      "omitted": false,
      "disabled": false,
      "required": false,
      "localized": false,
      "id": "title",
      "name": "Title",
      "type": "RichText",
      "validations": [
        {
          "enabledNodeTypes": []
        },
        {
          "enabledMarks": [
            "bold",
            "italic",
            "underline"
          ]
        }
      ]
    },
    {
      "omitted": false,
      "disabled": false,
      "required": false,
      "localized": false,
      "id": "pretext",
      "name": "Pretext",
      "type": "RichText",
      "validations": [
        {
          "enabledNodeTypes": []
        },
        {
          "enabledMarks": [
            "bold",
            "italic",
            "underline"
          ]
        }
      ]
    },
    {
      "omitted": false,
      "disabled": false,
      "required": false,
      "localized": false,
      "id": "body",
      "name": "Body",
      "type": "RichText",
      "validations": [
        {
          "enabledMarks": [
            "bold",
            "italic",
            "code",
            "underline",
            "superscript",
            "subscript",
            "strikethrough"
          ],
          "message": "Only bold, italic, code, underline, superscript, subscript, and strikethrough marks are allowed"
        },
        {
          "enabledNodeTypes": [
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "heading-6",
            "ordered-list",
            "unordered-list",
            "hr",
            "hyperlink",
            "entry-hyperlink",
            "asset-hyperlink"
          ],
          "message": "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, link to Url, link to entry, and link to asset nodes are allowed"
        },
        {
          "nodes": {
            "asset-hyperlink": [
              {
                "size": {
                  "min": 0,
                  "max": 5
                },
                "message": null
              }
            ],
            "embedded-asset-block": [
              {
                "size": {
                  "max": 3
                },
                "message": null
              }
            ],
            "embedded-entry-block": [
              {
                "linkContentType": [
                  "link"
                ],
                "message": null
              }
            ],
            "entry-hyperlink": [
              {
                "linkContentType": [
                  "landingPage"
                ],
                "message": null
              },
              {
                "size": {
                  "max": 5
                },
                "message": null
              }
            ]
          }
        }
      ]
    },
    {
      "omitted": false,
      "disabled": false,
      "required": false,
      "localized": false,
      "linkType": "Asset",
      "id": "asset",
      "name": "Asset",
      "type": "Link",
      "validations": [
        {
          "linkMimetypeGroup": [
            "image",
            "video"
          ]
        }
      ]
    },
    {
      "omitted": false,
      "disabled": false,
      "required": false,
      "localized": false,
      "linkType": "Entry",
      "id": "cta",
      "name": "Call to Action",
      "type": "Link",
      "validations": [
        {
          "linkContentType": [
            "callToAction"
          ]
        }
      ]
    },
    {
      "omitted": false,
      "disabled": false,
      "required": false,
      "localized": false,
      "linkType": "Entry",
      "id": "link",
      "name": "Link",
      "type": "Link",
      "validations": [
        {
          "linkContentType": [
            "link"
          ]
        }
      ]
    },
    {
      "omitted": true,
      "disabled": true,
      "required": false,
      "localized": false,
      "linkType": "Asset",
      "id": "image",
      "name": "Image",
      "type": "Link",
      "validations": []
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
      "widgetId": "richTextEditor",
      "settings": {
        "fieldId": "title"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "richTextEditor",
      "settings": {
        "fieldId": "pretext"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "richTextEditor",
      "settings": {
        "fieldId": "body"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "assetLinkEditor",
      "settings": {
        "fieldId": "asset"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "entryLinkEditor",
      "settings": {
        "fieldId": "cta"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "entryLinkEditor",
      "settings": {
        "fieldId": "link"
      }
    },
    {
      "widgetNamespace": "editor-builtin",
      "widgetId": "assetLinkEditor",
      "settings": {
        "fieldId": "image"
      }
    }
  ]
};
