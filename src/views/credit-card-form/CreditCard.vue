<template>
  <div class="card-item mx-auto"></div>
</template>

<script>
export default {
  name: 'CreditCard'
}
</script>

<style lang="scss" scoped>
.card-item {
  position: relative;
  z-index: 100;
  width: 420px;
  height: 270px;
  border-radius: 20px;
  // Photo by Greg Jeanneau on Unsplash
  background: url(./credit-card/card-background.png);
}
</style>
