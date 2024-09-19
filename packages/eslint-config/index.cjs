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
    'no-undef': 'error',
    'no-unused-vars': 'off',
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
  }

}
