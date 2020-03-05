<template>
  <div
    class="card__content-back -back d-flex flex-column w-100 h-100 pt-2 pb-2 justify-between"
  >
    <div class="card-magnetic-band w-100 h-3"></div>
    <div class="card-cvv-field fs-2 text-right h-3 mx-1">
      <div class="my-3d4 mr-1">{{ cvv }}</div>
    </div>
    <div class="card-brand d-flex flex-row w-100">
      <img class="logo ml-auto mr-1" src="./credit-card-logos/visa.png" />
    </div>
  </div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
  name: 'CreditCardBack',
  data () {
    return {
      cvv: ''
    }
  },
  methods: {
    updateCvv (value) {
      this.cvv = '*'.repeat(value.length)
    }
  },
  mounted () {
    EventBus.$on('update-cvv', this.updateCvv)
  },
  beforeDestroy () {
    EventBus.$off('update-cvv', this.updateCvv)
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
$card-height: 270px;

.card__content-back {
  transform: rotate3d(0, 1, 0, 180deg);
  .card-magnetic-band {
    background-color: hsla(0, 0%, 0%, 0.9);
  }
  .card-cvv-field {
    background-color: white;
    color: $grey-900;
    border-radius: 3px;
  }
  .card-brand .logo {
    opacity: 0.7;
  }
}
.card-brand .logo {
  width: 88px;
  height: 100%;
}
</style>
