// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BASE_URL = 'localhost:8000'

export const environment = {
  production: false,
  endpoint_url_backend_api: `http://${BASE_URL}`,
  ws_url_backend_api: `ws://${BASE_URL}/ws/`
};

/* 
  local-backend-endpoint-url: http://localhost:8000
*/
