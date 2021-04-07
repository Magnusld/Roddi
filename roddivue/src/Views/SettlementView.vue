<template>
  <SettlementTitle />
  <SettlementOverview v-bind:id="id"/>
  <SettlementThrow />
</template>


<script lang="ts">
// This is a template file for future vue views, when you want want to make a new view
// copy this file.
import { defineComponent } from "vue"
import SettlementTitle from "@/components/SettlementTitle.vue";
import SettlementOverview from "@/components/SettlementOverview.vue";
import SettlementThrow from "@/components/SettlementThrow.vue";
import {EstateResponse} from "@/client/types";
import {getSettlementById} from "@/client/settlement";

export default defineComponent({
  name: "OppgjørView", // name should in most cases be the same as the file name
  props: {
    id: {
      type: Number,
      default: 0
    }
  },

  // Kanskje ikke nødvendig?

  async setup(props) {
    const estate: EstateResponse = {id: 0, name: '', items: null, participants: null}
    try {
      await getSettlementById(props.id).then(promise => {
        estate.id = promise.id
        estate.name = promise.name
        estate.items = promise.items
        estate.participants = promise.participants
      })
      console.log(estate)
    } catch (e) {
      console.error(e)
    }
    return {
      estate
    }

  },


  components: { // add the components that the view should show
    SettlementTitle,
    SettlementOverview,
    SettlementThrow,
  }
})
</script>

<style scoped lang="scss">


</style>