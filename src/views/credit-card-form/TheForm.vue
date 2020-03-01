<template>
  <form class="the-form mw-40 mt-3d2 mx-auto pt-12 pb-3d2 px-2">
    <card-number-input />
    <card-holder-input />
  </form>
</template>

<script>
import CardNumberInput from './the-form/CardNumberInput.vue'
import CardHolderInput from './the-form/CardHolderInput'

export default {
  name: 'TheForm',
  components: {
    CardNumberInput,
    CardHolderInput
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.the-form {
  position: relative;
  bottom: calc(16px*10);
  background-color: $grey-100;
  color: $grey-700;
  text-align: left;
  border-radius: 8px;
  box-shadow: 5px 10px 20px 5px hsla(0, 0%, 0%, 0.1);
}
</style>
