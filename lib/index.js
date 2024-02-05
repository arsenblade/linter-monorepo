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
    "plugin:vue/vue3-recommended",
  ],
  plugins: [],
  rules: {
    /** vue */
    ...require('./rules/vue'),
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




