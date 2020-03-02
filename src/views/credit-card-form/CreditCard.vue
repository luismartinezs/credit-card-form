<template>
  <div
    class="card noselect card-item mx-auto z-500 shadow-500"
    @click="rotateCard"
    :class="{ rotated: rotated }"
  >
    <div
      class="card__content-front d-flex flex-column p-3d2 w-100 h-100 justify-between"
      v-show="!showBack"
    >
      <div class="card-brand d-flex flex-row justify-between w-100">
        <img class="chip" src="./credit-card/chip.png" />
        <img class="logo" src="./credit-card/visa.png" />
      </div>
      <div class="card-number fs-7 text-center">
        1006 #### #### 8452
      </div>
      <div class="card-data d-flex flex-row justify-between w-100">
        <div>
          <div class="card-heading mb-1d4">Card Holder</div>
          <div class="card-value">FULL NAME</div>
        </div>
        <div class="text-center">
          <div class="card-heading mb-1d4">Expires</div>
          <div class="card-value">MM/31</div>
        </div>
      </div>
    </div>

    <div
      class="card__content-back d-flex flex-column w-100 h-100 pt-2 pb-2 justify-between"
      v-show="showBack"
    >
      <div class="card-magnetic-band w-100 h-3"></div>
      <div class="card-cvv-field fs-2 text-right h-3 mx-1">
        <div class="my-3d4 mr-1">****</div>
      </div>
      <div class="card-brand d-flex flex-row w-100">
        <img class="logo ml-auto mr-1" src="./credit-card/visa.png" />
      </div>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  name: 'CreditCard',
  data () {
    return {
      showBack: false,
      rotated: false
    }
  },
  methods: {
    rotateCard () {
      console.log('clicked')
      function rotate () {
        console.log('rotating')

        this.rotated = !this.rotated
        console.log('this.rotated: ', this.rotated)
        setTimeout(() => {
          this.showBack = !this.showBack
        }, 394)
      }

      throttle(rotate.bind(this), 1000)()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
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
  .card__content-front {
    position: absolute;
    .card-brand {
      .chip {
        width: 60px;
        height: 100%;
      }
    }
    .card-number {
      color: white;
    }
    .card-data {
      .card-heading {
        color: white;
        opacity: 0.7;
        font-size: 14px;
      }
      .card-value {
        color: white;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}

.card {
  transform: perspective(1000px);
  transition: all 1s cubic-bezier(0.38, 0.01, 0.42, 1.33);
}
.rotated {
  transform: rotate3d(0, 1, 0, 180deg);
}
</style>
