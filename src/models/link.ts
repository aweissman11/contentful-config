import type { ContentModel } from "@/types";

export const link:ContentModel = {
  "id": "link",
  "name": "Link",
  "description": "Content type for links to other entries or assets.",
  "displayField": null,
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
      "id": "text",
      "name": "Text",
      "type": "Symbol",
      "required": false,
      "validations": [],
      "localized": false,
      "disabled": false,
      "omitted": false
    },
    {
      "id": "ref",
      "name": "Reference",
      "type": "Link",
      "linkType": "Entry",
      "required": true,
      "validations": [
        {
          "linkContentType": [
            "landingPage"
          ]
        }
      ],
      "localized": false,
      "disabled": false,
      "omitted": false
    }
  ],
  "configureEntryEditors": []
};
