<template>
  <div class="style-guide">
    <h1>Style guide</h1>
    <h2>Test components</h2>
    <div>
      <base-button class="btn-light" />
      <base-button class="btn-dark" />
    </div>
    <div>
      <base-alert />
    </div>
    <h2>Color palette</h2>
    <div>
      <h3>Primary</h3>
      <color-swatch v-for="color in colors.primary" :key="color" :color="color" />
    </div>
        <div>
      <h3>Grey</h3>
      <color-swatch v-for="color in colors.grey" :key="color" :color="color" />
    </div>
  </div>
</template>

<script>
import BaseButton from './style-guide/BaseButton'
import ColorSwatch from './style-guide/ColorSwatch'
import BaseAlert from './style-guide/BaseAlert'

export default {
  name: 'StyleGuide',
  components: { BaseButton, ColorSwatch, BaseAlert },
  data () {
    return {
      colors: {
        primary: [
          'hsl(185, 100%, 91%)',
          'hsl(194, 100%, 83%)',
          'hsl(192, 79%, 72%)',
          'hsl(194, 68%, 62%)',
          'hsl(203, 69%, 57%)',
          'hsl(210, 62%, 48%)',
          'hsl(221, 63%, 51%)',
          'hsl(230, 58%, 47%)',
          'hsl(221, 95%, 23%)'
        ],
        grey: [
          'hsl(199, 10%, 95%)',
          'hsl(199, 28%, 92%)',
          'hsl(199, 29%, 87%)',
          'hsl(199, 27%, 84%)',
          'hsl(200, 17%, 70%)',
          'hsl(201, 15%, 62%)',
          'hsl(200, 12%, 48%)',
          'hsl(201, 15%, 36%)',
          'hsl(207, 12%, 20%)'
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.style-guide {
  padding: 20px 20px 0 20px;
  text-align: left;
  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    margin-left: 0.5rem;
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
  }
  h3 {
    margin-left: 1rem;
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
  }
}
</style>
