import { defineConfig } from 'vitest/config';

export default defineConfig({
  define: {
    __DEV__: false,
    __TEST__: true,
    __ROOT_CONFIG_LOADED__: true,
  },
  test: {
    globals: true,
  },
});

console.log('Root Config: vitest.config.ts loaded');
