module.exports = {
  ignorePatterns: [
    '*.scss',
    '*.yaml',
    '*.mp4',
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
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
}
