<template>
  <label for="CCV">
    <div class="fs-2 mb-1d4">CCV</div>
    <div>
      <input
        class="w-100 fs-3 p-1 mb-3d2"
        id="CCV"
        name="credit-card-form"
        type="number"
        maxlength="4"
        required
      />
    </div>
  </label>
</template>

<script>
export default {
  name: 'CcvInput'
}
</script>
