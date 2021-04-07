<template>
  <router-link style="color:black; font-size: large"
                 class="title"
                 :to="'/estate/' + id">
    <Button class="p-button-primary p-button-raised">
      {{name}}
    </Button>
    </router-link>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Card from "primevue/card";
import Button from "primevue/button";

export default defineComponent({
  name: "EstateListing",
  props: {
    key: {
      default: null,
      type: Number
    },
    id: {
      default: null,
      type: Number
    },
    name: {
      default: "",
      type: String
    },
  },
  components: {
    Button
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
a{
  text-decoration: none;
  text-align: center;
  margin: 8px;
}
</style>