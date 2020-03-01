<template>
  <button class="btn fs-6">CLICK ME</button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.btn {
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 1rem 1.3rem;
  margin: 1rem 1.3rem;
  background-color: $grey-500;
  &-light {
    color: $grey-100;
  }
  &-dark {
    color: $grey-900;
  }
  &-primary {
    background-color: $primary-500;
  }
}
</style>
