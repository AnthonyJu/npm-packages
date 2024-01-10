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

## pick-zip

### 安装

```bash
pnpm i -D @anthony-ju/pick-zip
```

### 使用

在 `package.json` 中添加以下内容:

```json
{
  "scripts": {
    "pick-zip": "pick-zip"
  }
}
```

默认的压缩文件路径为根目录下的`dist`文件夹，压缩后的文件名为`dist.zip`，如果需要修改，可以使用以下命令:

```json
{
  "scripts": {
    "pick-zip": "pick-zip -i inputPath -o outputPath.zip"
  }
}
```
