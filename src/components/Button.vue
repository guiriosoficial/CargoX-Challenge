<template>
  <span class="button-container">{{ $t(`buttons.${placeholder}`) }}</span>
</template>

<script>
export default {
  name: 'Button',
  props: {
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables/colors.scss';

.button-container {
  cursor: pointer;
  font-size: 0.83em;
  border-radius: 6px;
  padding: 4px 6px;
  transition: .2s ease-out;
  color: $--color-text-placeholder;
  border: 1px solid $--color-text-placeholder;

  &:hover {
    background-color: $--color-info;
    border: 1px solid $--color-info;
    color: $--color-white;
  }
}
</style>
