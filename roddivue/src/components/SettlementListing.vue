<template>
  <router-link style="color:black; font-size: large"
                 class="title"
                 :to="'/settlement/' + id"
  >
    <Button class="p-button-secondary p-button-raised">
    {{name}}
    </Button>
    </router-link>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Card from "primevue/card";
import Button from "primevue/button";

export default defineComponent({
  name: "SettlementListing",
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