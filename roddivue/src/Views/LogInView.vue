<template>
  <div class="p-d-flex">
    <img src="../assets/RODDI-logo.png">
    <LogInPage v-if="mode === 'login'"/>
    <SignUpPage v-if="mode === 'signup'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LogInPage from "@/components/LogInPage.vue";
import SignUpPage from "@/components/SignUpPage.vue";

export default defineComponent({
  name: "LogInView",
  components: {
    SignUpPage,
    LogInPage
  },
  props: {
    mode: {
      type: String,
      default: "login"
    }
  }
})
</script>

<style scoped lang="scss">

.p-d-flex {
  justify-content: center;
}

</style>