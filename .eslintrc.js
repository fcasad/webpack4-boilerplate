module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', { code: 100 }],
  },
};
