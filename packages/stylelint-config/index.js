module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      files: [
        '**/*.{html,vue}',
      ],
    },
    {
      customSyntax: 'postcss-scss',
      files: [
        '**/*.{css,scss}',
      ],
    },
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  rules: {
    'indentation': 2,
    'max-empty-lines': 1,
    'no-empty-source': null,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-empty-first-line': true,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: [
          'rpx',
        ],
      },
    ],
    'string-quotes': 'single',
    'no-missing-end-of-source-newline': true,
    'alpha-value-notation': 'number',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-function-notation': 'legacy',
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'property-no-vendor-prefix': null,
    'function-max-empty-lines': 0,
    'function-comma-newline-after': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-whitespace-after': 'always',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep',
          'view-transition-new',
          'view-transition-old',
        ],
      },
    ],
    'selector-class-pattern': [
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
      {
        message: 'Class names should match the BEM CSS naming convention',
      },
    ],
  },
}
