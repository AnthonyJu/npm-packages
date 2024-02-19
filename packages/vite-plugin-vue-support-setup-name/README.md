# vite-plugin-vue-support-setup-name

使 vue script setup 语法支持 name 和inheritAttrs 属性，根据 name 和inheritAttrs 自动转换。

## 特性

- 支持 name
- 支持 inheritAttrs

## 安装

```bash
pnpm add -D vite-plugin-vue-support-setup-name
```

## 使用

- In `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import SupportSetupName from 'vite-plugin-vue-support-setup-name'

export default defineConfig({
  plugins: [vue(), SupportSetupName()],
})
```

- In Vue file:

```vue
<template>
  <div>vite-plugin-vue-support-setup-name</div>
</template>

<script lang="ts" setup name="MyName" inheritAttrs="false">

</script>
```

## 更多

https://github.com/AnthonyJu/npm-packages/tree/main/packages/vite-plugin-vue-setup-name-support
