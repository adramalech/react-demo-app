module.exports = {
  root: true,
  env: { 
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    "plugin:import/typescript",
    'plugin:unicorn/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:yml/standard'
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: './',
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      impliedStrict: true
    },
  },
  ignorePatterns: [
    'dist', 
    '.eslintrc.cjs',
    'prettierrc.mts',
    'vite.config.ts',
    './src/vite-environment.d.ts'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'react-refresh',
    'import',
    'unicorn',
    'jsx-a11y',
    'json',
    'markdown',
    "jest"
  ],
  rules: {
    'import/no-unresolved': 'error',
    'react-refresh/only-export-components': [ 'warn', { allowConstantExport: true } ],
    "prettier/prettier": ['error', { 'singleQuote': false }],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline']
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        extensions: [
          '.ts', 
          '.tsx', 
          '.d.ts',
          '.js',
          '.jsx',
          '.json',
          '.node'
        ],
      }
    }
  },
}