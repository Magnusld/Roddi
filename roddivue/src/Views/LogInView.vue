<template>
  <LogInPage />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LogInPage from "@/components/LogInPage.vue";

export default defineComponent({
  name: "LogInView",
  components: {
    LogInPage
  }
})
</script>

<style scoped lang="scss">

</style>