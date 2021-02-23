<template>
  <div class="p-d-flex">
    <img src="../assets/RODDI-logo.png">
    <SignUpPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SignUpPage from "@/components/SignUpPage.vue";
import axios from "axios";

export default defineComponent({
  name: "SignUpView",
  components: {
    SignUpPage
  },
})
</script>

<style scoped lang="scss">

.p-d-flex {
  justify-content: center;
}

</style>