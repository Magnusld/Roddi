<template>
  <TabMenu :model="items" v-if="StoreStateAdminStatus"/>
  <div>
    <suspense>
      <router-view />
    </suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";
import TabMenu from "primevue/tabmenu";

export default defineComponent({
  name: 'App',
  components: {
    TabMenu
  },
  beforeCreate() {
      this.$store.commit('initializeStore')
      const token = this.$store.state.token
      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    },
    data () {
    return {
      items: [
        {label: 'Bruker', icon: 'pi pi-fw pi-home', to: '/user'},
        {label: 'Admin', icon: 'pi pi-fw pi-cog', to: '/'}
        ]
      }
    },
    computed: {
      StoreStateLoggedIn () {
        return this.$store.getters.getLoggedInStatus
      },
      StoreStateAdminStatus () {
        return this.$store.getters.getAdminStatus
      }
    }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
html, body{
  padding: 0;
  margin: 0;
}
body {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background: #e1e1e8;
}
</style>
