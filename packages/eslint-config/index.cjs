module.exports = {
  ignores: [
    'dist',
    'node_modules',
    'public',
    'src/assets',
  ],
  rules: {
    'vue/block-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
    'no-unused-vars': 'off',
    'curly': 'off',
    'antfu/if-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
  }

}
