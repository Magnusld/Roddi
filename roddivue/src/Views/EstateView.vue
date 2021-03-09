<template>
  <div>
    <div class="left-side">
      <h2>{{name}}</h2>
      <Card>
        <template #title>
          Beskrivelse
        </template>
        <template #content>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        </template>
      </Card>
      <Card>
        <template #title>
          The BackEnd Boiz
        </template>
        <template #content>
          <p> - Magnus </p>
          <p> - Bjørn </p>
          <p> - Yngve </p>
        </template>
      </Card>
    </div>
    <Divider layout="vertical"/>
    <div class="right-side">

    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue"
import Card from "primevue/card";
import Divider from "primevue/divider";

export default defineComponent({
  name: "EstateView",
  props: {
    name: {
      type: String,
      default: "Dødsbo"
    }
  },
  components: {
    Card,
    Divider
  }
})
</script>

<style scoped lang="scss">


</style>