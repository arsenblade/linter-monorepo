module.exports = {
  '@typescript-eslint/type-annotation-spacing': [
    'error',
    {
      after: true,
    },
  ],
  'import/no-extraneous-dependencies': 'off',
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
};
