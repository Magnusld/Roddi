<template>
  <EstateList
    v-bind:estates="estates"
  />
</template>

<script lang="ts">
import { defineComponent} from "vue"
import EstateList from "@/components/EstateList.vue";
import {EstateResponse} from "@/client/types";
import axios from "axios";

export default defineComponent({
  name: "EstatesView",
  components: {
    EstateList
  },
  async setup() {
    const estates: EstateResponse[] = []
    return
  }
  /*
  data() {
    return {
      estates: new Array<EstateResponse>()
    }
  },
  methods: {
    updateEstates() {
      console.log(axios.get('api/estates/'))
      axios.get('api/estates/').then(response => {
        for (let i = 0; i < response.data.length; i++) {
          const estate: EstateResponse = {
            id: response.data[i].id,
            name: response.data[i].name,
            participants: null,
            items: null
          }
          //console.log(response.data[i])
          this.estates.push(estate)
        }
        //console.log(estates[0])
      }).catch(error => {
        console.log(JSON.stringify(error))
      })
      console.log(this.estates)
    }
  },
  mounted() {
    this.updateEstates()
  }

   */
})
</script>

<style scoped lang="scss">

</style>