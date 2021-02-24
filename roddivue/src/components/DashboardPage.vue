<template>
  <p></p>

<div class="sizes">

    <Button @click="handleClick()" label="Large" icon="pi pi-check" class="p-button">Opprett dødsbo</Button>

  <!---@click="handleClick($event)"-->


</div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
import Button from 'primevue/button';
import axios from "axios";
export default defineComponent({
  name: "DashboardPage",
  props: { //add props here if needed
  },
  componoments: {Button  },
  setup() { //add code for setup if needed
    return {
    }
  },
  methods: {
    handleClick(){
      axios
          .post("api/estates/", { name: 'estate1' })
          .then(response => {
            console.log(response)
            this.$router.push('')
          })
    }
  }
})
</script>


<style scoped lang="scss">




</style>