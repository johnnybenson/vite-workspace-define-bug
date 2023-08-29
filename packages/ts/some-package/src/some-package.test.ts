import * as somePackage from './some-package';

test('__DEV__', () => {
  expect(__DEV__).toBeDefined;
});

test('__TEST__', () => {
  expect(__TEST__).toBeDefined;
});

test('__PROJECT_CONFIG_LOADED__', () => {
  expect(__PROJECT_CONFIG_LOADED__).toBeDefined;
});

test('__ROOT_CONFIG_LOADED__', () => {
// https://vitest.dev/guide/workspace.html#configuration
// > "None of the configuration options are inherited from the root-level config file."
  expect(() => __ROOT_CONFIG_LOADED__).toBeUndefined;
});

test('isDev', () => {
  expect(somePackage.isDev()).toBe(false);
});

test('isTest', () => {
  expect(somePackage.isTest()).toBe(true);
});

test('isProjectConfigLoaded', () => {
  expect(somePackage.isProjectConfigLoaded()).toBe(true);
})
