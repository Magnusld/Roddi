<template>
  <h2>Gjenstander som skal doneres</h2>
  <DonateList v-bind:id="id"/>
</template>

<script lang="ts">
// This is a template file for future vue views, when you want want to make a new view
// copy this file.
import { defineComponent } from "vue"
import DonateList from "@/components/DonateList.vue";

export default defineComponent({
  name: "DonateView", // name should in most cases be the same as the file name
  components: { // add the components that the view should show
    DonateList,
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style scoped lang="scss">

</style>