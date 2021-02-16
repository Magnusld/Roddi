<template>
  <p>Har routa te Loginpage</p>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "LogInPage",
  props: {
    msg: {
      type: String,
      required: false
    },
  },
  setup() {
    return {
    }
  }
});
</script>

<style scoped lang="scss">

</style>