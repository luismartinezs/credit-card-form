<template>
  <div class="debug z-900 p-1d2" :class="{ 'd-none': !show }">
    <button
      class="btn btn-primary btn-light py-1d4 px-1d2"
      @click="flipCard(false)"
    >
      Show front
    </button>
    <button
      class="btn btn-primary  btn-light py-1d4 px-1d2 ml-1"
      @click="flipCard(true)"
    >
      Show back
    </button>
  </div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
  name: 'Debug',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    flipCard (status) {
      EventBus.$emit('flip-card', status)
    }
  }
}
</script>

<style lang="scss" scoped>
.debug {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
