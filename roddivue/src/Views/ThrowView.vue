<template>
  <h2>Gjenstander som skal kastes</h2>
  <ThrowList v-bind:id="id"/>
</template>

<script lang="ts">
// This is a template file for future vue views, when you want want to make a new view
// copy this file.
import { defineComponent } from "vue"
import ThrowList from "@/components/ThrowList.vue";

export default defineComponent({
  name: "ThrowView", // name should in most cases be the same as the file name
  components: { // add the components that the view should show
    ThrowList,
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