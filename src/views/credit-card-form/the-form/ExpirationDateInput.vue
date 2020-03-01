<template>
  <label class="form-input" for="expirationDate">
    <div class="fs-2 mb-1d4">Expiration Date</div>
    <div class="d-flex flex-row">
      <div class="month-container dropdown-input mr-1">
        <input
          class="month fs-3 p-1 mb-3d2 w-100"
          id="expirationDate"
          name="credit-card-form"
          type="text"
          @click="onFocusMonth"
          @focus="onFocusMonth"
          @blur="onBlurMonth"
          autocomplete="off"
          v-model="selectedMonth"
        />
        <font-awesome-icon icon="angle-down" class="down-caret"/>
        <div v-show="showMonthDropdown" class="dropdown w-8 shadow-400 z-700">
          <ul class="z-500">
            <li class="py-1d4 pl-1d2 month-heading">Month</li>
            <li
              v-for="month in months"
              :key="month"
              @click="setMonth($event, month)"
              class="py-1d4 pl-1d2 month-item"
            >
              {{ month }}
            </li>
          </ul>
        </div>
      </div>

      <div class="year-container">
        <input
          class="year fs-3 p-1 mb-3d2 w-100"
          id="expirationDate"
          name="credit-card-form"
          type="text"
          autocomplete="off"
        />
      </div>

      <input name="chrome-autofill-dummy1" style="display:none" disabled />
      <input name="chrome-autofill-dummy2" style="display:none" disabled />
    </div>
  </label>
</template>

<script>
export default {
  name: 'ExpirationDateInput',
  data () {
    return {
      showMonthDropdown: false,
      showYearDropdown: false,
      selectedMonth: '',
      months: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      ]
    }
  },
  methods: {
    onFocusMonth () {
      this.showMonthDropdown = true
    },
    onBlurMonth () {
      setTimeout(() => {
        this.showMonthDropdown = false
      }, 100)
    },
    setMonth (event, month) {
      this.selectedMonth = month
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.form-input {
  position: relative;
  .month-container,
  .year-container {
    flex: 1;
  }
  .month-container {
    position: relative;
  .down-caret {
    position: absolute;
    top: 18px;
    right: 20px;
  }
  }
  .dropdown {
    position: absolute;
    bottom: 76px;
    background-color: $grey-100;
    border: 1px solid $primary-500;
    li.month-heading {
      color: $grey-600;
    }
    li.month-item {
      cursor: pointer;
      &:hover {
        background-color: $primary-500;
        color: $grey-100;
      }
    }
  }
}
</style>
