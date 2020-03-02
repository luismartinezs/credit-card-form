<template>
  <div class="wrapper pt-3 px-3">
    <card />
    <cube class="mb-2" />
  </div>
</template>

<script>
import Cube from './three-dim/Cube'
import Card from './three-dim/Card'

export default {
  name: 'ThreeDim',
  components: { Cube, Card }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
</style>
