<template>
  <Card>
    <template #subtitle>
      <p>{{name}}</p>
    </template>
    <template #content>
      {{description}}
    </template>
  </Card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Card from "primevue/card";

export default defineComponent({
  name: "ItemListing",
  components: {
    Card
  },
  props: {
    key: {
      default: null,
      type: Number
    },
    id: {
      default: null,
      type: Number
    },
    name: {
      default: "",
      type: String
    },
    description: {
      default: "",
      type: String
    }
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang="scss">

</style>