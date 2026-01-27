import { defineStore } from 'pinia'
import { ref } from 'vue'

const storeId = 'page'

export const usePageStore = defineStore(storeId, () => {
  const pageTitle = ref<string>('')
  const pageSubtitle = ref<string>('')
  const isLoadingPage = ref<boolean>(false)
  const hidePageHeader = ref<boolean>(false)

  return {
    pageTitle,
    pageSubtitle,
    isLoadingPage,
    hidePageHeader
  }
})
