module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.styles.{ts,tsx}': ['stylelint --fix']
}
