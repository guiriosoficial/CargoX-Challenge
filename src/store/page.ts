import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    pageTitle: '',
    pageSubtitle: '',
    pageIsLoading: false,
    hidePageHeader: false,
  }),
  getters: {
    getPageTitle: (state) => state.pageTitle,
    getPageSubtitle: state => state.pageSubtitle,
    getPageIsLoading: (state) => state.pageIsLoading,
    getHidePageHeader: (state) => state.hidePageHeader,
  },
  actions: {
    setPageTitle (title: string): void {
      this.pageTitle = title
    },
    setPageSubtitle (subtitle: string): void {
      this.pageSubtitle = subtitle
    },
    setPageIsLoading (isLoading: boolean): void {
      this.pageIsLoading = isLoading
    },
    setHidePageHeader (hidePageHeader: boolean): void {
      this.hidePageHeader = hidePageHeader
    }
  }
})
