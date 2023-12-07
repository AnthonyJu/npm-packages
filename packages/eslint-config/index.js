export const ignores = [
  'dist',
  'node_modules',
  'public',
  'src/assets',
  '**/*.d.ts',
  '**/*.css',
  '**/*.scss',
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
      code: 100,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
    },
  ],
}
