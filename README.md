# npm packages

## eslint-config

### 安装

本配置需要搭配 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 进行使用

```bash
pnpm i -D eslint @antfu/eslint-config @anthony-ju/eslint-config
```

在根目录创建`.eslintrc`文件，并将以下内容添加到文件中:

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

## stylelint-config

### 安装

```bash
pnpm i -D stylelint @anthony-ju/stylelint-config
```

### 使用

创建`.stylelintrc`文件，并将以下内容添加到文件中:

```json
{
  "extends": "@anthony-ju/stylelint-config"
}
```
