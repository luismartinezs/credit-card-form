<template>
  <div class="style-guide pt-2 px-2">
    <h1 class="mb-3d2">Style guide</h1>
    <h2 class="mb-1 ml-1">Test components</h2>
    <div>
      <base-button class="btn-light" />
      <base-button class="btn-dark" />
    </div>
    <div>
      <base-alert />
    </div>
    <div class="color-palette mb-2">
      <h2 class="mb-1 ml-1">Color palette</h2>
      <div class="mb-1">
        <h3 class="mb-3d4 ml-2">Primary</h3>
        <color-swatch
          v-for="color in colors.primary"
          :key="color"
          :color="color"
        />
      </div>
      <div>
        <h3 class="mb-3d4 ml-2">Grey</h3>
        <color-swatch
          v-for="color in colors.grey"
          :key="color"
          :color="color"
        />
      </div>
    </div>
    <div class="headings">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>

      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
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
  text-align: left;
}
</style>
