# personal stylelint config for vue

## 安装

```bash
pnpm i -D stylelint @anthony-ju/stylelint-config
```

## 使用

创建`.stylelintrc`文件，并将以下内容添加到文件中:

```json
{
  "extends": "@anthony-ju/stylelint-config"
}
```

在`package.json`中添加以下内容:

```json
{
  "scripts": {
    "lint:style": "stylelint --fix \"src/**/*.{vue,scss}\"",
  }
}
```
