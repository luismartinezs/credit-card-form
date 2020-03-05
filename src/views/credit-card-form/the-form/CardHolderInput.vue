<template>
  <label for="cardHolder">
    <div class="fs-2 mb-1d4">Card Holder</div>
    <div>
      <input
        @keyup="handleUpdate"
        class="w-100 fs-3 p-1 mb-3d2"
        id="cardHolder"
        name="credit-card-form"
        type="text"
        required
        v-model="cardHolder"
      />
    </div>
  </label>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
  name: 'CardHolderInput',
  data () {
    return {
      cardHolder: ''
    }
  },
  methods: {
    handleUpdate () {
      EventBus.$emit('update-card-holder', this.cardHolder)
    }
  }
}
</script>
