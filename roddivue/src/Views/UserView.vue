<template>
  <UserPage />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import UserPage from "@/components/UserPage.vue"

export default defineComponent({
  name: "UserView",
  components: {
    UserPage
  }
})
</script>

<style scoped lang="scss">

</style>