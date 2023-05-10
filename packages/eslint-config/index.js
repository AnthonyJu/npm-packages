module.exports = {
  extends: [
    '@antfu/eslint-config',
  ],
  ignorePatterns: [
    '*.scss',
  ],
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
    'curly': 'off',
    'antfu/if-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
}
