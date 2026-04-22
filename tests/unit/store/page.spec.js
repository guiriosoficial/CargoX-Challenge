import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usePageStore } from '@/store/page'

describe('page store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with default values', () => {
    const store = usePageStore()

    expect(store.pageTitle).toBe('')
    expect(store.pageSubtitle).toBe('')
    expect(store.isLoadingPage).toBe(false)
    expect(store.hidePageHeader).toBe(false)
  })

  it('should update page state values', () => {
    const store = usePageStore()

    store.pageTitle = 'Título'
    store.pageSubtitle = 'Subtítulo'
    store.isLoadingPage = true
    store.hidePageHeader = true

    expect(store.pageTitle).toBe('Título')
    expect(store.pageSubtitle).toBe('Subtítulo')
    expect(store.isLoadingPage).toBe(true)
    expect(store.hidePageHeader).toBe(true)
  })
})
