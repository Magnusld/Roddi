<template>
  <div>
    <router-link style="color:black; font-size: large"
                   class="title"
                   :to="'/estate/' + id"
    >
        {{name}}
      </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Card from "primevue/card";

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
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang="scss">

</style>