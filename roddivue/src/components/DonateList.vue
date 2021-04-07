<template>
  <p>Listen over donerte ting skal egentlig dukke opp her, lover!</p>
  <ScrollPanel style="width: 100%; height: 395px">
    <ItemListing v-for="item in this.items"
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
import {getAllItems} from "@/client/item";

export default defineComponent({
  name: "DonateList",
  props: { //add props here if needed
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
    ScrollPanel,
    ItemListing,
  },
  async setup(props) {
    const items = new Array<ItemResponse>();
    try {
      await getAllItems(props.id).then(promise => {

        for (let i = 0; i < promise.length; i++) {
          if (promise[i].throwDonate == "donated") {
            items.push(promise[i]);
          }
        }
      })
    } catch (e) {
      console.log(e);
    }
    return items;
  }
})
</script>

<style scoped lang="scss">

</style>