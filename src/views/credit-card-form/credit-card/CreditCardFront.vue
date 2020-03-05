<template>
  <div
    class="card__content-front -front d-flex flex-column p-3d2 w-100 h-100 justify-between"
  >
    <div class="card-brand d-flex flex-row justify-between w-100">
      <img class="chip" src="./chip.png" />
      <img class="logo" src="./credit-card-logos/visa.png" />
    </div>
    <div class="card-number fs-7 text-left">
      {{ cardNumber | hideCardNumber }}
    </div>
    <div class="card-data d-flex flex-row justify-between w-100">
      <div class="card-bottom-row">
        <div class="card-heading mb-1d4">Card Holder</div>
        <div class="card-value card-holder">{{ cardHolder }}</div>
      </div>
      <div class="text-center">
        <div class="card-heading mb-1d4">Expires</div>
        <div class="card-value card-expiration">
          {{ month }}/{{ year | parseYear }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
  name: 'CreditCardFront',
  data () {
    return {
      cardHolder: 'Full name',
      month: 'MM',
      year: 'YY',
      cardNumber: '#### #### #### ####'
    }
  },
  methods: {
    updateCardHolder (value) {
      this.cardHolder = value
    },
    updateCardNumber (value) {
      this.cardNumber = value
    },
    updateMonth (value) {
      this.month = value
    },
    updateYear (value) {
      this.year = value
    }
  },
  filters: {
    hideCardNumber (cardNumber) {
      return cardNumber.replace(/\d/g, d => '#')
    },
    parseYear (fullYear) {
      return fullYear.slice(-2)
    }
  },
  mounted () {
    EventBus.$on('update-card-holder', this.updateCardHolder)
    EventBus.$on('update-card-number', this.updateCardNumber)
    EventBus.$on('update-month', this.updateMonth)
    EventBus.$on('update-year', this.updateYear)
  },
  beforeDestroy () {
    EventBus.$off('update-card-holder', this.updateCardHolder)
    EventBus.$off('update-card-number', this.updateCardNumber)
    EventBus.$off('update-month', this.updateMonth)
    EventBus.$off('update-year', this.updateYear)
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.card-brand .logo {
  width: 88px;
  height: 100%;
}
.card__content-front {
  position: absolute;
  .card {
    &-brand {
      .chip {
        width: 60px;
        height: 100%;
      }
    }
    &-number {
      color: white;
    }
    &-data {
      .card-bottom-row {
        max-width: 70%;
      }
      .card-heading {
        color: white;
        opacity: 0.7;
        font-size: 14px;
        letter-spacing: 0.7px;
      }
      .card-value {
        color: white;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
      }
      .card-holder {
        text-overflow: ellipsis;
        /* Required for text-overflow to do anything */
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
