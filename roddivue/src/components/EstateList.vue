<template>
  <EstateListing v-for="estate in estates"
                 :key="estate.id"
                 :id="estate.id"
                 :name="estate.name"
                 />
  <Button @click="checkEstates"></Button>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import EstateListing from "@/components/EstateListing.vue";
import Button from "primevue/button";
import {EstateResponse} from "@/client/types";

export default defineComponent({
  name: "EstateList",
  components: {
    EstateListing,
    Button
  },
  props: {
    estates: {
      default: [],
      type: Object as PropType<EstateResponse[]>
    }
  },
  mounted() {
    this.checkEstates()
  },
  methods: {
    checkEstates() {
      console.log(this.estates)
    }
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">

</style>