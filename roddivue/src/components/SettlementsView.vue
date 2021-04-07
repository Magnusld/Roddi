<template>
  <SettlementList
    v-bind:settlements="settlements"
  />
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {EstateResponse} from "@/client/types";
import {getAllSettlements} from "@/client/settlement";
import SettlementList from "@/components/SettlementList.vue";

export default defineComponent({
  name: "SettlementsView",
  components: {
    SettlementList
  },
  async setup() {
    const settlements: EstateResponse[] = []
    await getAllSettlements().then(response => {
      for (let i = 0; i < response.length; i++) {
        settlements.push(response[i])
      }
    })
    return {
      settlements
    }
  }
})
</script>

<style scoped lang="scss">

</style>