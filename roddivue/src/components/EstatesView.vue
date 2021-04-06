<template>
  <EstateList
    v-bind:estates="estates"
  />
</template>

<script lang="ts">
import { defineComponent} from "vue"
import EstateList from "@/components/EstateList.vue";
import {EstateResponse} from "@/client/types";
import {getAllEstates} from "@/client/estate";

export default defineComponent({
  name: "EstatesView",
  components: {
    EstateList
  },
  async setup() {
    const estates: EstateResponse[] = []
    await getAllEstates().then(response => {
      for (let i = 0; i < response.length; i++) {
        estates.push(response[i])
      }
    })
    return {
      estates
    }
  }
})
</script>

<style scoped lang="scss">

</style>