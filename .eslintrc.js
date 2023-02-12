module.exports = {
  env: {
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['jest'],
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/prop-types': 'off',
    'import/extensions': ['error', { jsx: 'always' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/img-redundant-alt': 'off',
  },
};
