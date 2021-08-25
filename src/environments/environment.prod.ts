const WEB = 'http://backend.test/';
const API = 'http://backend.test/api/v1/';

export const environment = {
  production: true,
  WEB,
  STORAGE_URL: WEB,
  API_URL_AUTHENTICATION: API + 'authentication/',
  API_URL_PRIVATE: API,
  API_URL_PUBLIC: API,
};
