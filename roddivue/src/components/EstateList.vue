<template>
  <EstateListing v-for="estate in estates"
                 :key="estate.id"
                 :id="estate.id"
                 :name="estate.name"
                 />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import EstateListing from "@/components/EstateListing.vue";

export default defineComponent({
  name: "EstateList",
  components: {EstateListing},
  props: {
    estates: {
      default: [],
      type: Array<any>()
    }
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">

</style>