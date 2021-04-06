<template>
  <UserPage />
  <Button @click="fixPlz">

  </Button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import UserPage from "@/components/UserPage.vue"
import Button from "primevue/button";
import {store} from "@/store";
import router from "@/router";

export default defineComponent({
  name: "UserView",
  components: {
    UserPage,
    Button
  },
  methods: {
    onClick() {
      console.log(this.$store.getters.getLoggedInStatus)
    },
    fixPlz() {
      localStorage.removeItem("token")
      store.commit('removeToken')
      store.commit('removeUsername')
      store.commit('removeUserID')
      router.push('/login')
      this.onClick()
    }
  }
})
</script>

<style scoped lang="scss">

</style>