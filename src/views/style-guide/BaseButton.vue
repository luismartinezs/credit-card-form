<template>
  <button class="btn">CLICK ME</button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style lang="scss" scoped>
.btn {
  font-size: 1.5rem;
  font-weight: bold;
  background-color: hsl(203, 77%, 49%);
  border: none;
  border-radius: 8px;
  padding: 1rem 1.3rem;
  margin: 1rem 1.3rem;
  &-light {
    color: hsl(0, 0%, 96%);
  }
  &-dark {
    color: rgb(26, 26, 26);
  }
}
</style>
