<template>
  <p>Oversikt over det som skal doneres og kastes, enten knapper til eksterne views eller lister</p>
  <router-link :to="'/throw/' + id">
  <Button label="Kastet" />
  </router-link>
  <router-link :to="'/donate/' + id">
  <Button label="Donert" class="p-button-secondary" />
  </router-link>
</template>

<script lang="ts">
// This is a template file for future vue components, when you want want to make a new component
// copy this file.
import {defineComponent} from "vue";
import Button from 'primevue/button';

export default defineComponent({
  name: "SettlementThrow",
  props: { //add props here if needed
    id: {
      type: Number,
      default: 0
    }
  },
  components: {
    Button,
  },
  setup() { //add code for setup if needed
    return {
    }
  }
})
</script>

<style scoped lang="scss">

  .p-button-secondary {
    margin-left: 10px;
  }


</style>