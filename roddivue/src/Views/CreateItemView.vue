<template>
  <p>Legg til en gjenstand</p>
  <CreateItem v-bind:estateId = estateId />
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
  props: {
    estateId: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style scoped lang="scss">

</style>