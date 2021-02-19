<template>
  <div class="p-d-flex">
    <img src="../assets/RODDI-logo.png">
    <LogInPage />
  </div>
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

.p-d-flex {
  justify-content: center;
}

</style>