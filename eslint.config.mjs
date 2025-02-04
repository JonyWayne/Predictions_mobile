import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import reactNativePlugin from 'eslint-plugin-react-native';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintReactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-native': reactNativePlugin,
      'no-extraneous-dependencies': importPlugin,
      prettier: prettierPlugin,
      'react-hooks': eslintReactHooks,
    },
  },
  {
    ignores: ['.expo', 'node_modules', '.prettierrc', 'global.d.ts'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'max-len': ['off', { code: 120 }],
      'linebreak-style': ['error', 'unix'],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'never'],
      'arrow-body-style': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-empty': 'error',
      'no-extra-semi': 'error',
      'no-multiple-empty-lines': 'error',
      'eol-last': 'error',
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
      'space-infix-ops': 'error',
      'keyword-spacing': 'error',
      'array-bracket-newline': 'error',
      'object-curly-newline': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unknown-property': 'error',
      'react/no-array-index-key': 'error',
    },
  }
);
