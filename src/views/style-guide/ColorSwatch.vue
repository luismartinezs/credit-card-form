<template>
  <div class="color-swatch" :style="{backgroundColor: color}"></div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 40px;
.color-swatch {
  border-radius: 5px;
  width: $size;
  height: $size;
  margin: 5px;
  display: inline-block;
  box-shadow: inset 0 0 2px 2px hsla(0, 0%, 0%, 0.1);
}
</style>
