import type { Plugin } from 'vite'
import { compileScript, parse } from '@vue/compiler-sfc'
import MagicString from 'magic-string'

function supportSetupName(code: string, id: string) {
  const magicString = new MagicString(code)
  const { descriptor } = parse(code)
  if (descriptor.scriptSetup && !descriptor.script) {
    const { attrs } = compileScript(descriptor, { id })
    const { name, lang, inheritAttrs } = attrs
    if (name || inheritAttrs) {
      magicString.appendLeft(
        0,
        `<script ${lang ? `lang="${lang}"` : ''}>
          import { defineComponent } from 'vue'
          export default defineComponent({
            ${name ? `name: "${name}",` : ''}
            ${inheritAttrs ? `inheritAttrs: ${inheritAttrs !== 'false'},` : ''}
          })
        </script>\n`,
      )
    }

    const map = magicString.generateMap({ hires: true })
    const filename = /.*\/(\S*)/.exec(id)![1]

    map.file = filename
    map.sources = [filename]

    return {
      map,
      code: magicString.toString(),
    }
  }
  return null
}

export default function VueSupportSetupName(): Plugin {
  return {
    name: 'vite:vue-support-setup-name',
    enforce: 'pre',
    async transform(code, id) {
      if (!/\.vue$/.test(id)) return null
      return supportSetupName.call(this, code, id)
    },
  }
}
