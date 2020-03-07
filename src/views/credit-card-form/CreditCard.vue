<template>
  <div
    class="card noselect mx-auto z-500 shadow-500"
    :class="{ flipped: isCardFlipped }"
  >
    <credit-card-front
      class="side front fs-10 w-100 h-100"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    />
    <credit-card-back
      class="side back fs-10 w-100 h-100"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    />
  </div>
</template>

<script>
import CreditCardFront from './credit-card/CreditCardFront.vue'
import CreditCardBack from './credit-card/CreditCardBack.vue'
import EventBus from '@/event-bus'
import bg01 from './credit-card/credit-card-backgrounds/01.png'
import bg02 from './credit-card/credit-card-backgrounds/02.png'
import bg03 from './credit-card/credit-card-backgrounds/03.png'
import bg04 from './credit-card/credit-card-backgrounds/04.png'

export default {
  name: 'CreditCard',
  components: {
    CreditCardFront,
    CreditCardBack
  },
  data () {
    return {
      isCardFlipped: false,
      backgrounds: [bg01, bg02, bg03, bg04]
    }
  },
  computed: {
    backgroundUrl () {
      return this.backgrounds[
        Math.ceil(Math.random() * this.backgrounds.length)
      ]
    }
  },
  methods: {
    flipCard (status) {
      this.isCardFlipped = status
    }
  },
  mounted () {
    EventBus.$on('flip-card', this.flipCard)
  },
  beforeDestroy () {
    EventBus.$off('flip-card', this.flipCard)
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
$card-height: 270px;

.card {
  position: absolute;
  perspective-origin: center;
  transform-style: preserve-3d;
  backface-visibility: visible;
  transition: all 1s cubic-bezier(0.59, -0.01, 0.46, 1.29);
  left: 0;
  right: 0;
  top: calc(-#{$card-height} / 2);
  width: 430px;
  height: $card-height;
  border-radius: 20px;
  &.flipped {
    transform: rotateX(0deg) rotateY(180deg) rotateZ(0deg);
  }
  .side {
    position: absolute;
    border-radius: 20px;
    color: $grey-100;
    font-weight: bold;
    letter-spacing: 2px;
    background-size: cover;
  }
  .back {
    transform: rotateY(180deg);
  }
}
</style>
