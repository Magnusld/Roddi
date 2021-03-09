<template>
  <p>Innlogget bruker: {{StoreStateLoggedInUsername}}</p>
  <Button @click="logout()">Logg ut</Button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Button from "primevue/button";
import {logout} from "@/client/login";

export default defineComponent({
  name: "UserPage",
  props: {
  },
  components: {
    Button
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
    }
  }
})
</script>

<style scoped lang="scss">

</style>