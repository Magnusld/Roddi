<template>
  <p>Legg til en gjenstand</p>
  <CreateItem/>


</template>

<script lang="ts">

import { defineComponent } from "vue";
import CreateItem from "@/components/CreateItem.vue";
import axios from "axios";

export default defineComponent({
  name: "CreateItemView", // name should in most cases be the same as the file name
  components: {
    CreateItem,





  },

})
</script>

<style scoped lang="scss">

</style>