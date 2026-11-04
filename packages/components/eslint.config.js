import { litConfig } from '@repo/eslint-config/lit';

export default [
  ...litConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];