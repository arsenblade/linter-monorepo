/**
 * @fileoverview Monorepository for linters
 * @author linter-monorep
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const vueConfig = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    /** vue */
    ...require('./rules/typescript'),
  },
}



module.exports = {
  ...vueConfig,
  /** Make extendable plugin */
  configs: {
    recommended: {
      ...vueConfig,
    },
  },
};




