export const ignores = [
  'dist',
  'node_modules',
  'public',
  'src/assets',
]

export const rules = {
  'vue/block-order': [
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
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
    },
  ],
}
