import type { IFieldOptions } from "contentful-migration";

export const complexRichText: IFieldOptions = {
  type: "RichText",
  required: false,
  validations: [
    {
      enabledMarks: [
        "bold",
        "italic",
        "code",
        "underline",
        "superscript",
        "subscript",
        "strikethrough",
      ],
      message:
        "Only bold, italic, code, underline, superscript, subscript, and strikethrough marks are allowed",
    },
    {
      enabledNodeTypes: [
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
        "asset-hyperlink",
      ],
      message:
        "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, link to Url, link to entry, and link to asset nodes are allowed",
    },
    {
      nodes: {},
    },
  ],
  localized: false,
  disabled: false,
  omitted: false,
};
