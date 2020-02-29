<template>
  <div>
    <h1>Style guide</h1>
    <div>
      <base-button class="btn-light" />
      <base-button class="btn-dark" />
    </div>
    <div>
      <color-swatch v-for="color in colors" :key="color" :color="color" />
    </div>
  </div>
</template>

<script>
import BaseButton from './style-guide/BaseButton'
import ColorSwatch from './style-guide/ColorSwatch'

export default {
  name: 'StyleGuide',
  components: { BaseButton, ColorSwatch },
  data () {
    return {
      colors: [
        'hsl(203, 77%, 49%)'
      ]
    }
  }
}
</script>
