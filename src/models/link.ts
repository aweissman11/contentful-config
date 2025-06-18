export const link: ContentModel = {
  id: 'link',
  name: 'Link',
  description: 'Content type for links to other entries or assets.',
  displayField: null,
  fields: [
    {
      omitted: false,
      disabled: false,
      required: true,
      localized: false,
      id: 'internalTitle',
      name: 'Internal Title',
      type: 'Symbol',
      validations: [],
    },
    {
      omitted: false,
      disabled: false,
      required: false,
      localized: false,
      id: 'text',
      name: 'Text',
      type: 'Symbol',
      validations: [],
    },
    {
      omitted: false,
      disabled: false,
      required: true,
      localized: false,
      linkType: 'Entry',
      id: 'ref',
      name: 'Reference',
      type: 'Link',
      validations: [
        {
          linkContentType: ['landingPage'],
        },
      ],
    },
  ],
};
