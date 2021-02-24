<template>
  <button @click="getAllEstates">GetEstates</button>
  <EstateListing v-for="estate in estates"
                 :key="estate.id"
                 :name="estate.name"
                 />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import EstateListing from "@/components/EstateListing.vue";
import axios from "axios";

export default defineComponent({
  name: "EstateList",
  components: {EstateListing},
  props: {
  },
  setup() {
    return {}
  },
  methods: {
    getAllEstates() {
      console.log(axios.get('api/estates/'))
      this.estates = axios.get('api/estates/')
    }
  },
  data() {
    return{
      estates: null
    }
  }
})
</script>

<style scoped lang="scss">

</style>