
import { describe, test } from 'vitest'
import { setup,UyeKayit } from '@nuxt/kayit.vue'



describe('Profil linki olu�turulur', async () => {
  await setup({
     data() {
                return {
                    isLoggedin: true,
                };
  });
  test('my profile', () => {
        expect(proflink.text()).toEqual("#profile");
  })
})


describe('Profil linki olu�turulmamal�d�r', async () => {
  await setup({
      data() {
                return {
                    isLoggedin: false,
                };
            }
  })
  test('#profile', () => {
        expect(proflink.exists()).toBe(false);

  })
})

   