<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  {{ notes }}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios'

@Options({
  components: {
    HelloWorld,
  },
})

export default class App extends Vue {
  name: 'App' | undefined;
  notes: undefined;

  mounted(){
    axios.get('http://localhost:8000/api/notes/').then((response) => {
      this.notes = response.data
      console.log(this.data)
  })
}

}




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
