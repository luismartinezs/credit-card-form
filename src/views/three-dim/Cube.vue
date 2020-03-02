<template>
  <div class="container">
    <h2 class="mb-1">Dice</h2>
    <div class="cube hidebf" :style="{transform: `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`}">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
    <button @click="handleRoll">Roll dice!</button>
  </div>
</template>

<script>
export default {
  name: 'Cube',
  data () {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  },
  methods: {
    handleRoll () {
      const getRandomAngle = () => Math.floor(Math.random() * 360)
      this.x = getRandomAngle()
      this.y = getRandomAngle()
      this.z = getRandomAngle()
    }
  }
}
</script>

<style scoped>
.showbf div {
  backface-visibility: visible;
}
.hidebf div {
  backface-visibility: hidden;
}
/* Define the container div, the cube div, and a generic face */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  /* perspective: 550px; */
  transform-origin: 30% 30% 0px;
  perspective-origin: center;
  transform-style: preserve-3d;
  transition: all 0.5s;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Define each face based on direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
</style>
