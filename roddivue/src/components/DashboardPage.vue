<template>
  <div class="sizes">
    <Button label="Large" icon="pi pi-check" class="p-button">
      Opprett dødsbo
    </Button>
  <!---@click="handleClick($event)"-->
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import Button from 'primevue/button';
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
   // handleClick(){
   // }
  }
})
</script>


<style scoped lang="scss">




</style>