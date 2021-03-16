<template>
  <div class="grid-container">
    <div class="grid-item-1"><ItemDesc/></div>
    <div class="grid-item-2"><ItemChoices/></div>
  </div>
</template>

<script lang="ts">
// This is a template file for future vue views, when you want want to make a new view
// copy this file.
import { defineComponent } from "vue"
import ItemDesc from "@/components/ItemDesc.vue";
import ItemChoices from "@/components/ItemChoices.vue";

export default defineComponent({
  name: "GjenstandView", // name should in most cases be the same as the file name
  components: { // add the components that the view should show
    ItemDesc,
    ItemChoices
  }
})
</script>

<style scoped lang="scss">

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-item-2 {
  padding-top: 110px;
}

</style>