import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AppSidebar from '~/components/AppSidebar.vue'

describe('AppSidebar', () => {
  it('使い方ボタンからモーダル表示イベントを送る', async () => {
    const wrapper = await mountSuspended(AppSidebar)

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('open-tutorial')).toHaveLength(1)
  })
})
