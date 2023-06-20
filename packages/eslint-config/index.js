module.exports = {
  ignorePatterns: [
    '*.scss',
    '*.yaml',
    'src/assets/**/*',
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
