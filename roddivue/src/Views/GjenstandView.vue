<template>
  <div class="grid-container">
    <div class="grid-item-1"><ItemDesc/></div>
    <div class="grid-item-2"><ItemChoices/></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ItemDesc from "@/components/ItemDesc.vue";
import ItemChoices from "@/components/ItemChoices.vue";
import Button from "primevue/button";
import {getAllEstateItems} from "@/client/item";

export default defineComponent({
  name: "GjenstandView",
  components: {
    ItemDesc,
    ItemChoices
  },
  methods: {

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