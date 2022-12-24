/* You should register your application on https://my.telegram.org/ */

import * as telegramApi from 'telegram-api-vue/dist/telegramApi.min';

telegramApi.setConfig({
  app: {
    id: 1167695, /* App ID */
    hash: 'b5fbdce2ae649419c889c1eb970407bc', /* App hash */
    version: '1.0.0' /* App version */
  },
  server: {
    test: [
      {
        id: 2, /* DC ID */
        // host: '149.154.167.40', //orig
        host: '149.154.167.40',
        // host: '149.154.171.5',
        port: 443
      }
    ],
    production: [
      {
        id: 2, /* DC ID */
        // host: '149.154.167.40',
        host: '149.154.167.50', //orig
        // host: '149.154.171.5',
        port: 443
      }
    ]
  }
});

export default telegramApi;