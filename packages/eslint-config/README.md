# personal eslint config

## 安装

搭配 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 进行使用：

```bash
pnpm i -D eslint @antfu/eslint-config @anthony-ju/eslint-config
```

## 使用

在根目录创建`eslint.config.js`文件，并将以下内容添加到文件中:

With `"type": "module"` in package.json (recommended):

```js
import antfu from '@antfu/eslint-config'
import { ignores, rules } from '@anthony-ju/eslint-config'

export default antfu(
  {
    rules,
    ignores,
  },
)
```

With CJS:

```js
const antfu = require('@antfu/eslint-config').default
const { ignores, rules } = require('@anthony-ju/eslint-config')

module.exports = antfu(
  {
    rules,
    ignores,
  },
)
```

Add script for package.json：

```json
{
  "scripts": {
    "lint": "eslint --fix"
  }
}
```
