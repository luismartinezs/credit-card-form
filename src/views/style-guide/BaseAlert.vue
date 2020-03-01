<template>
  <div class="alert mx-1d2 my-1 px-2 py-3d2">
    <h2 class="alert__heading mb-1 fs-6">Our privacy policy has changed</h2>
    <p class="alert__text fs-4">Make sure you know how these changes affect you.</p>
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
  box-shadow: inset 0 0 1px 3px hsla(207, 79%, 21%, 0.2);
  .alert__heading {
    font-weight: 500;
  }
}
</style>
