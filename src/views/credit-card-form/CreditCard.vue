<template>
  <div class="card noselect card-item mx-auto z-500 shadow-500">
    <div
      class="card__content-front d-flex flex-column p-3d2 w-100 h-100 justify-between"
    >
      <div class="card-brand d-flex flex-row justify-between w-100">
        <img class="chip" src="./credit-card/chip.png" />
        <img class="visa" src="./credit-card/visa.png" />
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
  </div>
</template>

<script>
export default {
  name: 'CreditCard'
}
</script>

<style lang="scss" scoped>
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
  .card__content-front {
    position: absolute;
    .card-brand {
      .chip {
        width: 60px;
        height: 100%;
      }
      .visa {
        width: 88px;
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
</style>
