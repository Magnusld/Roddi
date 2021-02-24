<template>
  <Card>
    <p>{{key}}</p>
    <p>{{name}}</p>
  </Card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Card from "primevue/card";

export default defineComponent({
  name: "EstateListing",
  props: {
    key: Number,
    name: String
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