Clone this project https://codepen.io/JavaScriptJunkie/full/YzzNGeR

<template>
  <div class="credit-card-form px-1 pt-12 w-100 h-100">
    <debug :show="false" />
    <the-form />
  </div>
</template>

<script>
import TheForm from './credit-card-form/TheForm.vue'
import Debug from './Debug.vue'

export default {
  name: 'CreditCardForm',
  components: {
    TheForm,
    Debug
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.credit-card-form {
  background-color: $primary-200;
}
</style>
