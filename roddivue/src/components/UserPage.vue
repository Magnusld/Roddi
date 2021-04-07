<template>
  <Card>
    <template #content>
      <img src="../assets/RODDI-logo-2.png">
      <p>Innlogget som: {{StoreStateLoggedInUsername}}</p>
    </template>
    <template #footer>
      <Button class="p-button-danger" @click="logout()">Logg ut</Button>
    </template>
  </Card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Button from "primevue/button";
import {logout} from "@/client/login";
import Card from "primevue/card";

export default defineComponent({
  name: "UserPage",
  props: {
  },
  components: {
    Button,
    Card
  },
  setup() {
    return {
    }
  },
  methods: {
    logout() {
      logout()
    }
  },
  computed: {
    StoreStateLoggedInUsername () {
      return this.$store.getters.getUsername
    },
    StoreStateLoggedIn () {
      return this.$store.getters.getLoggedInStatus
    },
    StoreStateAdminStatus () {
      return this.$store.getters.getAdminStatus
    }
  }
})
</script>

<style scoped lang="scss">


</style>