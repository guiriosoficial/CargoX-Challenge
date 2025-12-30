<template>
  <div class="plain-text-container">
    <span
      v-if="text"
      class="plain-text-container__content"
      v-html="upperCaseText"
    />
    <span
      v-else
      class="no-content"
    >
      {{ $t(`no-content.${noContent}`) }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: [String, Number],
      default: ''
    },
    noContent: {
      type: String,
      default: 'no-data'
    }
  },
  computed: {
    upperCaseText () {
      return String(this.text).toUpperCase()
    }
  }
}
</script>

<style scoped lang="scss">
.plain-text-container {
  .plain-text-container__content {
    & > p {
      display: block;
      margin-block-end: 6px;
      margin-bottom: 6px !important;
      &:last-child { margin-bottom: 0; }
    }
  }
}
</style>
