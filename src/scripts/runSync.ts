import { syncContentfulToLocal } from './sync.js';

syncContentfulToLocal()
  .then(() => {
    console.log('Sync completed successfully.');
  })
  .catch((error) => {
    console.error('Sync failed:', error);
  });
