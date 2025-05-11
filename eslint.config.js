import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'build',
      'src/components/ui/*.tsx',
      'commitlint.config.js'
    ]
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/order': ['error', {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          order: 'desc',
          /* ignore case. Options: [true, false] */
          caseInsensitive: true,
        },
      }],
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-var': 'warn',
      'no-unusued-expression': 0,
      'quote-props': ['warn', 'as-needed'],
      quotes: [2, 'single', { avoidEscape: true }],
      'arrow-body-style': [2, 'as-needed'],
      indent: ['error', 2]
    },
  },
)
