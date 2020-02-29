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
$size: 50px;
.color-swatch {
  border-radius: 10px;
  width: $size;
  height: $size;
  margin: 6px;
  display: inline-block;
  box-shadow: inset 0 0 3px 2px hsla(0, 0%, 0%, 0.1);
}
</style>
