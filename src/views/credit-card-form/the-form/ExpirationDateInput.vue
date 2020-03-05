<template>
  <label class="form-input" for="expirationDate">
    <div class="fs-2 mb-1d4">Expiration Date</div>
    <div class="d-flex flex-row">
      <div class="month-container dropdown-input mr-1">
        <input
          class="month fs-3 p-1 mb-3d2 w-100"
          id="expirationMonth"
          name="credit-card-form"
          type="text"
          @click="onFocusMonth"
          @focus="onFocusMonth"
          @blur="onBlurMonth"
          autocomplete="off"
          v-model="selectedMonth"
          placeholder="Month"
          required
          readonly
        />
        <font-awesome-icon icon="angle-down" class="down-caret" />
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

      <div class="year-container dropdown-input mr-1">
        <input
          class="year fs-3 p-1 mb-3d2 w-100"
          id="expirationYear"
          name="credit-card-form"
          type="text"
          @click="onFocusYear"
          @focus="onFocusYear"
          @blur="onBlurYear"
          autocomplete="off"
          v-model="selectedYear"
          placeholder="Year"
          required
          readonly
        />
        <font-awesome-icon icon="angle-down" class="down-caret" />
        <div v-show="showYearDropdown" class="dropdown w-8 shadow-400 z-700">
          <ul class="z-500">
            <li class="py-1d4 pl-1d2 year-heading">Year</li>
            <li
              v-for="year in years"
              :key="year"
              @click="setYear($event, year)"
              class="py-1d4 pl-1d2 year-item"
            >
              {{ year }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
import EventBus from '@/event-bus.js'

export default {
  name: 'ExpirationDateInput',
  data () {
    return {
      showMonthDropdown: false,
      showYearDropdown: false,
      selectedMonth: '',
      selectedYear: '',
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
      ],
      yearCount: 11
    }
  },
  computed: {
    years () {
      const currentYear = new Date().getFullYear()
      const years = []
      for (let i = currentYear; i <= currentYear + this.yearCount; i++) {
        years.push('' + i)
      }
      return years
    }
  },
  methods: {
    onFocusMonth () {
      this.showMonthDropdown = true
    },
    onBlurMonth () {
      setTimeout(() => {
        this.showMonthDropdown = false
      }, 200)
    },
    setMonth (event, month) {
      this.selectedMonth = month
      EventBus.$emit('update-month', month)
    },
    onFocusYear () {
      this.showYearDropdown = true
    },
    onBlurYear () {
      setTimeout(() => {
        this.showYearDropdown = false
      }, 200)
    },
    setYear (event, year) {
      this.selectedYear = year
      EventBus.$emit('update-year', year)
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
  .month-container,
  .year-container {
    position: relative;
    .down-caret {
      color: $grey-900;
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
    li.month-heading,
    li.year-heading {
      color: $grey-600;
    }
    li.month-item,
    li.year-item {
      cursor: pointer;
      &:hover {
        background-color: $primary-500;
        color: $grey-100;
      }
    }
  }
}
</style>
