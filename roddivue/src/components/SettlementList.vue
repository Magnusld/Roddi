<template>
  <SettlementListing v-for="settlement in settlements"
                 :key="settlement.id"
                 :id="settlement.id"
                 :name="settlement.name"
                 />
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import SettlementListing from "@/components/SettlementListing.vue";
import {EstateResponse} from "@/client/types";

export default defineComponent({
  name: "SettlementList",
  components: {
    SettlementListing
  },
  props: {
    settlements: {
      default: [],
      type: Object as PropType<EstateResponse[]>
    }
  },
  mounted() {
    console.log(this.settlements)
  }
})
</script>

<style scoped lang="scss">

</style>