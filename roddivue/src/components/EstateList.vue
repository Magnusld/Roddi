<template>
  <EstateListing v-for="estate in estates"
                 :key="estate.id"
                 :id="estate.id"
                 :name="estate.name"
                 />
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import EstateListing from "@/components/EstateListing.vue";
import {EstateResponse} from "@/client/types";

export default defineComponent({
  name: "EstateList",
  components: {
    EstateListing
  },
  props: {
    estates: {
      default: [],
      type: Object as PropType<EstateResponse[]>
    }
  },
  mounted() {
    console.log(this.estates)
  }
})
</script>

<style scoped lang="scss">

</style>