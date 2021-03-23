<template>
  <SettlementTitle />
  <SettlementOverview />
  <SettlementThrow />
</template>


<script lang="ts">
// This is a template file for future vue views, when you want want to make a new view
// copy this file.
import { defineComponent } from "vue"
import SettlementTitle from "@/components/SettlementTitle.vue";
import SettlementOverview from "@/components/SettlementOverview.vue";
import SettlementThrow from "@/components/SettlementThrow.vue";

export default defineComponent({
  name: "OppgjørView", // name should in most cases be the same as the file name
  components: { // add the components that the view should show
    SettlementTitle,
    SettlementOverview,
    SettlementThrow,
  }
})
</script>

<style scoped lang="scss">


</style>