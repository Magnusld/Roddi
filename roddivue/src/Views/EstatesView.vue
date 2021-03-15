<template>
  <EstateList
    v-bind:estates="estates"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import EstateList from "@/components/EstateList.vue";
import { EstateResponse } from "@/client/types";
import {getAllEstates} from "@/client/estate";

export default defineComponent({
  name: "EstatesView",
  components: {
    EstateList
  },
  data() {
    return{
      estates: new Array<EstateResponse>()
    }
  },
  methods: {
    async updateEstates(): Promise<void> {
      this.estates = await getAllEstates()
      console.log(this.estates)
    }
  },
  created(){
    this.updateEstates()
  }
})
</script>

<style scoped lang="scss">

</style>