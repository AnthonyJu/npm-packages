# A simple tool to pick and zip files

## 安装

```bash
pnpm i -D @anthony-ju/pick-zip
```

## 使用

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
