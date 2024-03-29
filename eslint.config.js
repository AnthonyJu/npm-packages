import antfu from '@antfu/eslint-config'
import { ignores, rules } from './packages/eslint-config/index.js'

export default antfu(
  {
    rules,
    ignores,
    formatters: {
      markdown: false,
    },
  },
)
