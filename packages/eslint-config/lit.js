import lit from 'eslint-plugin-lit';
import wc from 'eslint-plugin-wc';
import { config as baseConfig } from './base.js';

export const litConfig = [
  ...baseConfig,
  lit.configs['flat/recommended'],
  wc.configs['flat/recommended'],
  {
    rules: {
      'wc/no-constructor-attributes': 'error',
    },
  },
];
