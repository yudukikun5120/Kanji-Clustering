import { mountSuspended } from '@nuxt/test-utils/runtime'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import KanjiCard from '~/components/KanjiCard.vue'

const mocks = vi.hoisted(() => ({
  copy: vi.fn()
}))

describe('KanjiCard', () => {
  beforeEach(() => {
    mocks.copy.mockReset()
    mocks.copy.mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: mocks.copy }
    })
  })

  it('漢字とUnicodeコードポイントを表示する', async () => {
    const wrapper = await mountSuspended(KanjiCard, {
      props: { glyph: '漢' }
    })

    expect(wrapper.text()).toContain('漢')
    expect(wrapper.text()).toContain('U+6F22')
  })

  it('クリックした漢字をクリップボードへ渡す', async () => {
    const wrapper = await mountSuspended(KanjiCard, {
      props: { glyph: '字' }
    })

    await wrapper.get('.relative').trigger('click')

    expect(mocks.copy).toHaveBeenCalledWith('字')
  })
})
