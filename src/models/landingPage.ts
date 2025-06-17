import type { ContentModel } from "@/types";

export const landingPage: ContentModel = {
  id: "landingPage",
  name: "Landing Page",
  description: "Content type for landing pages.",
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
    },
    {
      id: "title",
      name: "Title",
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
      id: "slug",
      name: "Slug",
      type: "Symbol",
      required: true,
      validations: [
        {
          unique: true,
          message: "This slug must be unique across the site.",
        },
      ],
      localized: false,
      disabled: false,
      omitted: false,
    },
    {
      id: "hero",
      name: "Hero",
      type: "Link",
      linkType: "Entry",
      required: false,
      validations: [
        {
          linkContentType: ["simpleHero"],
        },
      ],
      localized: false,
      disabled: false,
      omitted: false,
    },
    {
      id: "modules",
      name: "Modules",
      type: "Array",
      required: false,
      validations: [],
      localized: false,
      disabled: false,
      omitted: false,
    },
  ],
  configureEntryEditors: [],
};
