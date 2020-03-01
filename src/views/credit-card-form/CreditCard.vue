<template>
  <div class="card-item mx-auto z-500 shadow-500"></div>
</template>

<script>
export default {
  name: 'CreditCard'
}
</script>

<style lang="scss" scoped>
$card-height: 270px;

.card-item {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(-#{$card-height} / 2);
  width: 420px;
  height: $card-height;
  border-radius: 20px;
  // Photo by Greg Jeanneau on Unsplash
  background: url(./credit-card/card-background.png);
}
</style>
