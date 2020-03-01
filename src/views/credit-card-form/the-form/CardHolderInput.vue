<template>
  <label for="cardHolder">
    <div class="fs-2 mb-1d4">Card Holder</div>
    <div>
      <input
        class="w-100 fs-3 p-1 mb-3d2"
        id="cardHolder"
        name="credit-card-form"
        type="text"
        required
      />
    </div>
  </label>
</template>

<script>
export default {
  name: 'CardHolderInput'
}
</script>
