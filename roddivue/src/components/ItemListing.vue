<template>
  <router-link style="color:black"
                 class="subtitle"
                 :to="'/item/' + id">
  <Button class="p-button-secondary p-button-raised" style="font-size: large">
    {{name}}
  </Button>
  </router-link>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Button from "primevue/button";

export default defineComponent({
  name: "ItemListing",
  components: {
    Button
  },
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
    description: {
      default: "",
      type: String
    }
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
button{
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  display: block;
}
a{
  text-decoration: none;
  text-align: center;
}
</style>