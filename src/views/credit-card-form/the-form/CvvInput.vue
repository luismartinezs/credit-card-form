<template>
  <label for="CVV">
    <div class="fs-2 mb-1d4">CVV</div>
    <div>
      <input
        class="w-100 fs-3 p-1 mb-3d2"
        id="CVV"
        name="credit-card-form"
        inputmode="numeric"
        v-mask="cvvMask"
        type="number"
        required
        v-model="cvv"
      />
    </div>
  </label>
</template>

<script>
export default {
  name: 'CvvInput',
  data () {
    return {
      cvvMask: '####',
      cvv: ''
    }
  }
}
</script>
