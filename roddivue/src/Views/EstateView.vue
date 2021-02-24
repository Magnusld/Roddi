<template>
  <EstateList />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import EstateList from "@/components/EstateList.vue";

export default defineComponent({
  name: "EstateView",
  components: {
    EstateList
  }
})
</script>

<style scoped lang="scss">

</style>