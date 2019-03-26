module.exports = {
  extends: 'tslint-config-airbnb-base',
  rules: {
    'arrow-parens': false,
    'comment-format': [true, 'check-space'],
    'import-name': false,
    indent: [true, 'spaces', 2],
    'no-any': true,
    'no-duplicate-variable': true,
    'no-eval': true,
    'no-internal-module': true,
    'no-null-keyword': false,
    'no-var-keyword': true,
    'one-line': [true, 'check-open-brace', 'check-whitespace'],
    quotemark: [true, 'single'],
    semicolon: [true, 'always'],
    'trailing-comma': [
      true,
      {
        multiline: {
          objects: 'always',
          arrays: 'always',
          functions: 'never',
          typeLiterals: 'ignore'
        },
      },
    ],
    'triple-equals': [true, 'allow-null-check'],
    'typedef-whitespace': [
      true,
      {
        parameter: 'nospace',
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      }
    ],
    'variable-name': [true, 'allow-pascal-case'],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-separator',
      'check-type'
    ],
  },
}
