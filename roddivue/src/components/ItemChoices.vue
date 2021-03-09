<template>
    <h5>Ønsker du gjenstanden?</h5>
    <SelectButton v-model="value1" :options="options" />
    <h5>Prioritering</h5>
    <Rating v-model="value2" :stars='10' :cancel="false" />
    <h5>Skal gjenstanden:</h5>
    <SelectButton v-model="value3" :options="options2" />
</template>

<script lang="ts">
// This is a template file for future vue components, when you want want to make a new component
// copy this file.
import {defineComponent} from "vue";
import SelectButton from 'primevue/selectbutton';
import Rating from 'primevue/rating';



export default defineComponent({
  name: "ItemChoices",
  props: { //add props here if needed
  },
  components: {
      SelectButton,
      Rating
    },
  setup() { //add code for setup if needed
    return {
    }
  },
  data() {
      return {
          value1: "Nei",
          options: ['Ja', 'Nei'],
          value2: 3,
          value3: "Kastes",
          options2: ['Kastes', 'Doneres bort'],
      }

  }
})
</script>

<style scoped lang="scss">

</style>