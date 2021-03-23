<template>

  <div class="Title">Oppgjør</div>
  <div class="tekst">
    <p>Her er fordelingen av gjenstandene</p>
  </div>
</template>

<script lang="ts">
// This is a template file for future vue components, when you want want to make a new component
// copy this file.
import {defineComponent} from "vue";

export default defineComponent({
  name: "SettlementTitle",
  props: { //add props here if needed
  },
  setup() { //add code for setup if needed
    return {
    }
  }
})
</script>

<style scoped lang="scss">

  .tekst {
    text-align: left;
  }

  .Title {
    font-size: 35px;
    text-align: left;
  }
</style>