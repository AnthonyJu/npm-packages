# npm packages

## eslint-config

### 安装

本配置需要搭配 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 进行使用

```bash
pnpm install --save-dev @antfu/eslint-config @anthony-ju/eslint-config
```

在根目录创建`.eslintrc`文件，并将以下内容添加到文件中:

```json
{
    "extends": [
        "@antfu/eslint-config",
        "@anthony-ju/eslint-config"
    ]
}
```

## stylelint-config

### 安装

```bash
pnpm install --save-dev @anthony-ju/stylelint-config
```

### 使用

创建`.stylelintrc`文件，并将以下内容添加到文件中:

```json
{
  "extends": "@anthony-ju/stylelint-config"
}
```
