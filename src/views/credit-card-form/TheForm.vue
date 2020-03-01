<template>
  <form class="the-form mw-40 mt-3d2 mx-auto py-3d2 px-2">
    <base-form-input />
    <base-form-input />
  </form>
</template>

<script>
import BaseFormInput from './the-form/BaseFormInput.vue'

export default {
  name: 'TheForm',
  components: {
    BaseFormInput
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.the-form {
  background-color: $grey-100;
  color: $grey-700;
  text-align: left;
  border-radius: 8px;
  box-shadow: 5px 10px 20px 5px hsla(0, 0%, 0%, 0.1);
}
</style>
