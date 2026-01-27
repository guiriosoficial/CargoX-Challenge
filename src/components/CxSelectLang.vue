<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const langOptions = {
  'pt-BR': '🇧🇷 Português (BR)',
  'en-US': '🇺🇸 English (US)'
}

const { locale } = useI18n()

function handleChangeLocale(value: Event) {
  const target = value.target as HTMLSelectElement
  document.documentElement.lang = target.value;
}
</script>

<template>
  <select
    v-model="locale"
    class="select-lang"
    aria-label="Select language"
    @change="handleChangeLocale"
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
.select-lang {
  padding: 4px;
  background: none;
  position: absolute;
  top: 8px;
  right: 8px;
  width: fit-content;
}
</style>