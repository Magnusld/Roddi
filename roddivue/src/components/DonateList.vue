<template>
  <p>Listen over donerte ting skal egentlig dukke opp her, lover!</p>
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
  name: "DonateList",
  props: { //add props here if needed
    items: {
      default: [],
      type: Object as PropType<ItemResponse[]>
    }
  },
  components: {
    ScrollPanel,
    ItemListing,
  },
  setup(props) { //add code for setup if needed
    console.log(props.items)

  }
})
</script>

<style scoped lang="scss">

</style>