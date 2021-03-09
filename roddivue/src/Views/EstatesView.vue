<template>
  <EstateList
    v-bind:estates="estates"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import EstateList from "@/components/EstateList.vue";
import axios from "axios";
import { EstateResponse } from "@/client/types";

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
    getAllEstates() {
      console.log(axios.get('api/estates/'))
      axios.get('api/estates/').then(response => {
        for (let i = 0; i < response.data.length; i++) {
          const estate: EstateResponse = {
            id: response.data[i].id,
            name: response.data[i].name,
            participants: null,
            items: null
          }
          console.log(response.data[i])
          this.estates.push(estate)
        }
        console.log(this.estates[0])
      }).catch(error => {
            console.log(JSON.stringify(error))
          })
    }
  },
  mounted() {
    this.getAllEstates()
  }
})
</script>

<style scoped lang="scss">

</style>