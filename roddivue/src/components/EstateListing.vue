<template>
  <Card>
    <template #content>
      <p>{{id}}</p>
      <p>{{name}}</p>
    </template>
  </Card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Card from "primevue/card";

export default defineComponent({
  name: "EstateListing",
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
    }
  },
  components: {
    Card,
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang="scss">

</style>