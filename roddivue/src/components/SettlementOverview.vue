<template>
  <p>Her kommer det masse grids :))))))</p>
  <div class="grid-container">
    <div class="grid-user">
      <p>Bruker1</p>
    </div>
    <div class="grid-user">
      <p>Bruker2</p>
    </div>
    <div class="grid-user">
      <p>Bruker3</p>
    </div>
    <div class="grid-user">
      <p>Bruker4</p>
    </div>
    <div class="grid-user">
      <p>Bruker5</p>
    </div>
    <div class="grid-user">
      <p>Bruker6</p>
    </div>

  </div>
</template>

<script lang="ts">
// This is a template file for future vue components, when you want want to make a new component
// copy this file.
import {defineComponent} from "vue";

export default defineComponent({
  name: "SettlementOverview",
  props: { //add props here if needed
  },
  setup() { //add code for setup if needed
    return {
    }
  }
})
</script>

<style scoped lang="scss">

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

</style>