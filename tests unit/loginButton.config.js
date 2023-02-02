import { describe, test } from 'vitest'
import { setup, loginButton } from '@nuxt/theLogin.vue'


describe('Kayit butonu calisiyor', async () => {
  await setup({

        const: onClose = jest.fn(),
        const: wrapper = mount(loginButton, {
            propsData: {
                onClose
            }

        }),
         test( 'Kayit butonu calisiyor' () => {
   
          wrapper:find ('login-back-btn').trigger('button') ,
        
              expect(onClose).toHaveBeenCalled()
        
        
        }),

});

import { describe, test } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
describe('My test', async () => {
  await setup({
    // test context options
  })
  test('my test', () => {
    // ...
  })
})