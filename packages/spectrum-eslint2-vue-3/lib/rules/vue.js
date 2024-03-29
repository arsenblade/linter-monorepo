module.exports = {
  'vue/html-indent': [
    'error',
    2,
    {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
    },
  ],
  'vue/script-indent': [
    'error',
    2,
    {
      baseIndent: 0,
      switchCase: 2,
    },
  ],
  'vue/attributes-order': 'error',
  'vue/max-attributes-per-line': [
    'error',
    {
      singleline: 1,
      multiline: 1,
    },
  ],
  'vue/html-closing-bracket-newline': [
    'error',
    {
      singleline: 'never',
      multiline: 'always',
    },
  ],
  'vue/multi-word-component-names': 'off',
  'vue/order-in-components': [
    'error',
    {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'LIFECYCLE_HOOKS',
        'watch',
        'watchQuery',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    },
  ],
  'vue/object-curly-spacing': ['error', 'always'],
  'vue/attribute-hyphenation': 'error',
  'vue/first-attribute-linebreak': 'error',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/require-default-prop': 'error',
  'vue/no-v-html': 'off',
};
