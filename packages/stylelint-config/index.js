export default {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    '@stylistic/stylelint-config'
  ],
  overrides: [
    {
      files: ['**/*.{html,vue}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'selector-class-pattern': [
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
      {
        message: 'Class names should match the BEM CSS naming convention',
      },
    ],
  },
}
