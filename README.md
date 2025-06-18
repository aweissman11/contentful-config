# Contentful Config

A way to manage your contentful content types and models through code.

Initially built following these instructions: https://www.totaltypescript.com/how-to-create-an-npm-package.
Take it up with Matt Pocock if you don't like it.

## Installation

`npm install --save-dev contentful-config-code`

## TODOS:

- [x] ~~Don't delete fields, just omit them from the API response~~ [06-16-25]
- [x] ~~Needs an onboarding process to take an existing Contentful space and turn it into config objects~~ [06-17-25]
- [x] ~~Field Movement~~ [06-16-25]
- [ ] Locales
- [ ] Write tests
- [ ] LATER
  - [ ] Content Type editor interfaces
  - [ ] Content Type annotations??
  - [ ] Generate types from the model files
  - [ ] Full delete of a field?? Maybe this just goes in a migration script rather than the config model
