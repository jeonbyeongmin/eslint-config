module.exports = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },

  plugins: ['react', 'react-hooks'],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  overrides: [],
};
