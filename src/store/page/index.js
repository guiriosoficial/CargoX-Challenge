import getters from './getters'
import actions from './actions'
import state from './state'

import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    pageTitle: '',
    pageSubtitle: '',
    pageLoading: false,
    hidePageHeader: false,
  }),
  getters: {
    getPageTitle: (state) => state.pageTitle,
    getPageSubtitle: state => state.pageSubtitle,
    getPageIsLoading: (state) => state.pageLoading,
    getHidePageHeader: (state) => state.hidePageHeader,
  },
  actions: {
    setPageTitle (title) {
      this.pageTitle = title
    },
    setPageSubtitle (subtitle) {
      this.pageSubtitle = subtitle
    },
    setPageIsLoading (isLoading) {
      this.pageIsLoading = isLoading
    },
    setHidePageHeader (hidePageHeader) {
      this.hidePageHeader = hidePageHeader
    }
  }
})
