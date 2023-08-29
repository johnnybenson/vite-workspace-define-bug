export function isDev() {
  return __DEV__ ? true : false;
}

export function isTest() {
  return __TEST__ ? true : false;
}

export function isProjectConfigLoaded() {
  return __PROJECT_CONFIG_LOADED__ ? true : false;
}
