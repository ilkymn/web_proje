

import { describe, test } from 'vitest'
import { setup, TheHeader } from '@nuxt/TheHeader.vue'

describe('E BEBEK', async () => {
  await setup({
    
                msg: "E BEBEK",
           
  })
  test('E BEBEK', () => {
    expect(wrapper.text()).toContain("E BEBEK");
  })
})