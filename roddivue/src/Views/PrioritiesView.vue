<template>
  <p>Dette komponentet er kun et template</p>
  <Priorities/>

</template>

<script lang="ts">


import { defineComponent } from "vue"
import Priorities from "@/components/Priorities.vue";

export default defineComponent({
  name: "PrioritiesView",
  components: {
    Priorities,
  }
})
</script>

<style scoped lang="scss">

</style>