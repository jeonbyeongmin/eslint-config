module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  extends: ['eslint:recommended', 'prettier'],
  plugins: ['import'],

  rules: {
    'no-implicit-coercion': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
        location: 'anywhere',
      },
    ],
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
  },
  overrides: [],
};
