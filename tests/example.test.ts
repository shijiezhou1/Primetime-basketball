import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch, isDev } from '@nuxt/test-utils'

describe('example', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true,
  })

  it('RendersPrimeTime Sports Academy', async () => {
    expect(await $fetch('/')).toMatch('Nuxt 3 Awesome Starter')
  })

  if (isDev()) {
    it('[dev] ensure vite client script is added', async () => {
      expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
    })
  }
})
