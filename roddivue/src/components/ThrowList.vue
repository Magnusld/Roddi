<template>
  <ScrollPanel class="panelclass">
    <ItemListing v-for="item in items"
                   :key="item.id"
                   :id="item.id"
                   :name="item.name"
                   :description="item.description"
      />
  </ScrollPanel>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ItemListing from "@/components/ItemListing.vue";
import {ItemResponse} from "@/client/types";
import ScrollPanel from "primevue/scrollpanel";
import {getAllItems} from "@/client/item";

export default defineComponent({
  name: "ThrowList",
  props: { //add props here if needed
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
          if (promise[i].throwDonate == "thrown") {
            items.push(promise[i]);
          }
        }
      })
    } catch (e) {
      console.log(e);
    }
    return{
      items
    }
  }

})
</script>

<style scoped lang="scss">
.panelclass{
  width: 40%;
  margin-left: 30vw;
}
</style>