import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePageStore = defineStore('page', () => {
  const pageTitle = ref<string>('')
  const pageSubtitle = ref<string>('')
  const isLoadingPage = ref<boolean>(false)
  const hidePageHeader = ref<boolean>(false)

  function setPageTitle (title: string): void {
    pageTitle.value = title
  }
  function setPageSubtitle (subtitle: string): void {
    pageSubtitle.value = subtitle
  }
  function setPageIsLoading (isLoading: boolean): void {
    isLoadingPage.value = isLoading
  }
  function setHidePageHeader (isHide: boolean): void {
    hidePageHeader.value = isHide
  }

  return {
    pageTitle,
    pageSubtitle,
    isLoadingPage,
    hidePageHeader,
    setPageTitle,
    setPageSubtitle,
    setPageIsLoading,
    setHidePageHeader
  }
})
