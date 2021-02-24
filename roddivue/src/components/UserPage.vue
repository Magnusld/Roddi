<template>
  <p>Innlogget bruker: {{StoreStateLoggedInUsername}}</p>
  <Button @click="logout()">Logg ut</Button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import Button from "primevue/button";

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
      axios
          .post("/api/token/logout/")
          .then(response => {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            this.$store.commit('removeToken')
            this.$store.commit('removeUsername')
            this.$router.push('/login')
          })
          .catch(error => {
            if (error.response) {
              console.log(JSON.stringify(error.response.data))
            } else if (error.message) {
              console.log(JSON.stringify(error.message))
            } else {
              console.log(JSON.stringify(error))
            }
          })
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