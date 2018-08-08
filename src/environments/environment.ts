// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,  // To do, generate new keys and put them in a .env file. I shouldn´t have dem here - Tried, but failed...
  app_id: '12282241',
  app_key: 'fabf7b95f02d42f72334a9e1ccdd0a43',
  edamam_api_url: 'https://api.edamam.com',
  api_url: 'http://api-recipebook.test/api'
};
