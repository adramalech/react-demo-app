import js from '@eslint/js';
import globals, { browser } from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginJson from 'eslint-plugin-json';
import pluginMarkdown from 'eslint-plugin-markdown';

export default tseslint.config({
  root: true,
  env: {
    browser: true,
    es2023: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:json/recommended',
    'plugin:prettier/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
  ],
  files: ['**/*.{ts,tsx,css,mts,cjs,js,jsx,mjs,json,md}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: './',
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier: reactPrettier,
    import: pluginImport,
    unicorn: pluginUnicorn,
    json: pluginJson,
    markdown: pluginMarkdown,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': 'error',
    semi: ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'no-var': 'error',
    'no-empty': 'error',
    'no-unused-expressions': ['error', { allowTernary: true }],
    curly: 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'are'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  ignores: [
    'dist',
    'eslint.config.js',
    'bun.lockb',
    'prettier.js',
    'tsconfig.app.json',
    'tsconfig.json',
    'tsconfig.node.json',
    'package.json',
    'vite.config.ts',
    'vitest.config.ts',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts', '.mjs', '.mts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        extensions: ['.ts', '.d.ts', '.js', '.mjs', '.mts', '.json', '.node'],
      },
    },
    react: {
      version: 'detect',
    },
  },
});
