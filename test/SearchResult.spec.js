import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import SearchResult from '~/components/SearchResult.vue'

registerEndpoint('/kanji-clustering-api/affinities', () => ({
  affinities: ['字', '宇']
}))

describe('SearchResult', () => {
  it('URLで指定した漢字を初期値にしてAPI結果を表示する', async () => {
    const wrapper = await mountSuspended(SearchResult, {
      route: '/?character=学'
    })

    expect(wrapper.get('input').element.value).toBe('学')
    await vi.waitFor(() => {
      expect(wrapper.text()).toContain('字')
      expect(wrapper.text()).toContain('宇')
    })
  })
})
