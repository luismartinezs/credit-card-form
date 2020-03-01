<template>
  <label class="form-input" for="cardNumber">
    <div class="form-input__title fs-2 mb-1d4">Card Number</div>
    <div>
      <input
        class="form-input__input w-100 fs-3 p-1 mb-3d2"
        id="cardNumber"
        name="credit-card-form"
        inputmode="numeric"
        v-mask="cardNumberMask"
        title="Only numeric values allowed."
        required
        v-model="cardNumber"
      />
    </div>
  </label>
</template>

<script>
export default {
  name: 'CardNumberInput',
  data () {
    return {
      cardNumberMask: '#### #### #### ####',
      cardNumber: ''
    }
  }
}
</script>
