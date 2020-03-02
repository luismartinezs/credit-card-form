<template>
  <div>
    <div class="card mx-auto mb-1" :class="{ flipped: isCardFlipped }">
      <div class="side front fs-10 w-100 h-100">FRONT</div>
      <div class="side back fs-10 w-100 h-100">BACK</div>
    </div>
    <div class="mb-1d2">
      <button
        class="mr-1d2 btn btn-primary btn-light p-1d2 fs-6"
        @click="flipCard(true)"
      >
        Show back
      </button>
      <button
        class="btn btn-primary btn-light  p-1d2 fs-6"
        @click="flipCard(false)"
      >
        Show front
      </button>
    </div>
    <div>
      <input
        class="fs-4"
        @focus="flipCard(true)"
        @blur="flipCard(false)"
        value="Focus on me"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
.card {
  position: relative;
  height: 270px;
  width: 426px;
  perspective-origin: center;
  transform-style: preserve-3d;
  transition: all 1s cubic-bezier(0.59, -0.01, 0.46, 1.29);
  &.flipped {
    transform: rotateX(0deg) rotateY(180deg) rotateZ(0deg);
  }
  .side {
    display: block;
    position: absolute;
    border-radius: 20px;
    color: $grey-100;
    font-weight: bold;
    letter-spacing: 2px;
    background: linear-gradient(120deg, $primary-500, $primary-700);
  }
  .back {
    transform: rotateY(180deg);
  }
}
button {
  &:hover {
    background-color: $primary-700;
  }
}
</style>
