module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    'import/extensions': ['.jsx', '.js'],
    allowImportExportEverywhere: true,
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    camelcase: 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-indent': 'off',
    indent: 'off',
  },
};
