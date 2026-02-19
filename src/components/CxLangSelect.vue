<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const langOptions = {
  'pt-BR': '🇧🇷 Português (BR)',
  'en-US': '🇺🇸 English (US)'
}

const { locale } = useI18n()

watch(locale, (newLocale) => {
  document.documentElement.lang = newLocale
})
</script>

<template>
  <label class="sr-only" for="lang-select">
    {{ $t('a11y.labels.selectLanguage') }}
  </label>
  <select
      id="lang-select"
      v-model="locale"
      :aria-label="$t('a11y.labels.selectLanguage')"
      class="lang-select"
  >
    <option
        v-for="(value, key) in langOptions"
        :key="key"
        :value="key"
    >
      {{ value }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.lang-select {
  padding: 4px;
  background: none;
  position: absolute;
  top: 8px;
  right: 8px;
  width: fit-content;
}
</style>