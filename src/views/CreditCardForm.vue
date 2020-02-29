Clone this project https://codepen.io/JavaScriptJunkie/full/YzzNGeR

<template>
    <div>
      <credit-card />
      <the-form />
    </div>
</template>

<script>
import CreditCard from '../components/CreditCard.vue'
import TheForm from '../components/TheForm.vue'

export default {
  name: 'CreditCardForm',
  components: {
    CreditCard, TheForm
  }
}
</script>

<style lang="scss" scoped>

</style>
