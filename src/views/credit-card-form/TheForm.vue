<template>
  <form class="the-form mw-40 mx-auto pt-12 pb-3d2 px-2 shadow-500">
    <credit-card />
    <card-number-input />
    <card-holder-input />
    <div class="d-flex">
      <expiration-date-input class="mr-2" />
      <ccv-input />
    </div>
  </form>
</template>

<script>
import CardNumberInput from './the-form/CardNumberInput.vue'
import CardHolderInput from './the-form/CardHolderInput'
import expirationDateInput from './the-form/ExpirationDateInput'
import CcvInput from './the-form/CcvInput'
import CreditCard from './CreditCard'

export default {
  name: 'TheForm',
  components: {
    CardNumberInput,
    CardHolderInput,
    expirationDateInput,
    CcvInput,
    CreditCard
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.the-form {
  position: relative;
  background-color: $grey-100;
  color: $grey-700;
  text-align: left;
  border-radius: 8px;
}
</style>
