<template>
  <div
    class="card noselect mx-auto z-500 shadow-500"
    :class="{ flipped: isCardFlipped }"
  >
    <credit-card-front class="side front fs-10 w-100 h-100" />
    <credit-card-back class="side back fs-10 w-100 h-100" />

  </div>
</template>

<script>
import CreditCardFront from './credit-card/CreditCardFront.vue'
import CreditCardBack from './credit-card/CreditCardBack.vue'

export default {
  name: 'CreditCard',
  components: {
    CreditCardFront,
    CreditCardBack
  },
  data () {
    return {
      isCardFlipped: false
    }
  },
  methods: {
    flipCard (status) {
      this.isCardFlipped = status
    }
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
  // Photo by Greg Jeanneau on Unsplash

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
    background: url(./credit-card/credit-card-backgrounds/01.png);
    background-size: cover;
  }
  .back {
    transform: rotateY(180deg);
  }
}

</style>
