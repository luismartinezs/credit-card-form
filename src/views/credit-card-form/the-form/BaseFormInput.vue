<template>
  <label class="form-input" for="cardNumber">
    <div class="form-input__title fs-2 mb-1d4">Card Number</div>
    <div>
      <input
        class="form-input__input full-width fs-3 p-1 mb-3d2"
        id="cardNumber"
        name="credit-card-form"
        type="text"
      />
    </div>
  </label>
</template>

<script>
export default {
  name: 'BaseFormInput'
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.form-input__input {
  background-color: inherit;
  color: $grey-900;
  border-radius: 5px;
  border-color: $grey-500;
  border-width: 1px;
  border-style: solid;
  transition: all 0.7s;
  &:focus,
  &:hover {
    border-color: $primary-600;
    outline: none;
  }
  &:focus {
    box-shadow: 3px 10px 20px 0 hsla(0, 0%, 0%, 0.1);
  }
}
</style>
