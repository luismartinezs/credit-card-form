<template>
  <form class="the-form">
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
  padding: 23px 33px;
  margin: 25px 23px;
  box-shadow: 5px 10px 20px 5px hsla(0, 0%, 0%, 0.1);
}
</style>
