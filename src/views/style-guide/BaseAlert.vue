<template>
  <div class="alert">
    <h2 class="alert__heading">Our privacy policy has changed</h2>
    <p class="alert__text">Make sure you know how these changes affect you.</p>
  </div>
</template>

<script>
export default {
  name: 'BaseAlert'
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.alert {
  background-color: $primary-100;
  color: $primary-900;
  text-align: left;
  border-radius: 8px;
  padding: 23px 33px;
  margin: 25px 23px;
  box-shadow: inset 0 0 1px 3px hsla(207, 79%, 21%, 0.2);
  .alert__heading {
    margin-bottom: 0.8rem;
    font-weight: 500;
    font-size: 1.4rem;
  }
  .alert__text {
    font-size: 1.2rem;
  }
}
</style>
