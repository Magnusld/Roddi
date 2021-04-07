<template>
  <ScrollPanel style="width: 100%; height: 395px">
      <ItemListing v-for="item in items"
                   :key="item.id"
                   :id="item.id"
                   :name="item.name"
                   :description="item.description"
      />
  </ScrollPanel>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import ItemListing from "@/components/ItemListing.vue";
import {ItemResponse} from "@/client/types";
import ScrollPanel from "primevue/scrollpanel";

export default defineComponent({
  name: "ItemList",
  props: {
    items: {
      default: [],
      type: Object as PropType<ItemResponse[]>
    },
    id: {
      type: Number,
      default: 0
    }
  },
  components: {
    ItemListing,
    ScrollPanel
  },
  setup(props) {
    console.log(props.items)
  }
})
</script>

<style scoped lang="scss">

</style>