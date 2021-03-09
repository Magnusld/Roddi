<template>
  <ItemListing v-for="item in items"
               :key="item.id"
               :id="item.id"
               :name="item.name"
  />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ItemListing from "@/components/ItemListing.vue";

export default defineComponent({
  name: "ItemList",
  props: {
    items: {
      default: [],
      type: Array<any>()
    }
  },
  components: {
    ItemListing
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang="scss">

</style>