# vite-plugin-vue-setup-extend-plus

Make the vue script setup syntax support the name and inheritAttrs attribute

Automatically convert based on name and inheritAttrs

## Feature

- support name
- support inheritAttrs

## Install

```bash
pnpm add -D vite-plugin-vue-setup-name-support
```

## Usage

- In `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueSetupNameSupport from 'vite-plugin-vue-setup-name-support'

export default defineConfig({
  plugins: [vue(), VueSetupNameSupport()],
})
```

- In Vue file:

```vue
<template>
  <div>vite-plugin-vue-setup-name</div>
</template>

<script lang="ts" setup name="MyName" inheritAttrs="false">

</script>
```

## Check more

https://github.com/AnthonyJu/npm-packages/tree/main/packages/vite-plugin-vue-setup-name-support
