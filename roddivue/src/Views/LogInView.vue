<template>
  <div class="p-d-flex">
    <Card class="logocard">
      <template #content>
        <img src="../assets/RODDI-logo-2.png">
      </template>
    </Card>
    <LogInPage v-if="mode === 'login'"/>
    <SignUpPage v-if="mode === 'signup'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LogInPage from "@/components/LogInPage.vue";
import SignUpPage from "@/components/SignUpPage.vue";
import Card from "primevue/card";

export default defineComponent({
  name: "LogInView",
  components: {
    SignUpPage,
    LogInPage,
    Card
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
  margin-top: 3vh;
}

</style>