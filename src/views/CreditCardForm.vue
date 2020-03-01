Clone this project https://codepen.io/JavaScriptJunkie/full/YzzNGeR

<template>
    <div class="credit-card-form px-1 pt-4 w-100 h-100">
      <credit-card />
      <the-form />
    </div>
</template>

<script>
import CreditCard from './credit-card-form/CreditCard.vue'
import TheForm from './credit-card-form/TheForm.vue'

export default {
  name: 'CreditCardForm',
  components: {
    CreditCard, TheForm
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.credit-card-form {
  background-color: $primary-100;
}
</style>
