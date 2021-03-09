<template>
  <p>Dette komponentet er kun et template</p>
</template>

<template>
  <InputText type="text" v-model="value" />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import InputText from 'primevue/inputtext';




export default defineComponent({
  name: "CreateItem",
  props: { //add props here if needed
  },
  setup() { //add code for setup if needed
    return {
    }
  }
})
</script>

<style scoped lang="scss">

</style>