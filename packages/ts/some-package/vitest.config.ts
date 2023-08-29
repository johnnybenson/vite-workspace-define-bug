import { defineProject } from 'vitest/config'

export default defineProject({
  define: {
    __DEV__: false,
    __TEST__: true,
    __PROJECT_CONFIG_LOADED__: true,
  },
  test: {
    globals: true,
  },
});

console.log('Project Config: vitest.config.ts loaded');
