<template>
  <p>Legg til en gjenstand</p>
  <CreateItem/>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import CreateItem from "@/components/CreateItem.vue";
import axios from "axios";

export default defineComponent({
  name: "CreateItemView",
  components: {
    CreateItem,
  },
})
</script>

<style scoped lang="scss">

</style>