import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: { prettier },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      indent: ['error', 2],
      'prettier/prettier': 'error',
      camelcase: ['error', { properties: 'always' }],
    },
    extends: [js.configs.recommended, configPrettier],
  },
])
