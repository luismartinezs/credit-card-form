Clone this project https://codepen.io/JavaScriptJunkie/full/YzzNGeR

<template>
    <div class="credit-card-form">
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
  width: 100%;
  height: 100%;
  background-color: $primary-100;
}
</style>
