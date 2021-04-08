<template>
    <Card class = "Cardclass">

    <template #title>

        <div class = "Tittel">{{name}}</div>
    </template>
</Card>
  <Card class = "Cardclass">
    <template #title>
        Beskrivelse
    </template>
    <template #content>
        <div class = "Descs">
        {{description}}
        </div>
    </template>
</Card>
    <Card class = "Cardclass">
      <template #title>
        Verdi
      </template>
        <template #content>
            <div class = "Descs">
            {{value}}kr
            </div>
        </template>
</Card>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import Card from 'primevue/card';
import Button from 'primevue/button';



export default defineComponent({
  name: "ItemDesc",
  components: {
      Card,
    },
  props: {
    name: {
      type: String,
      default: 'Name'
    },
    description: {
      type: String,
      default: ' '
    },
    value: {
      type: Number,
      default: 0
    }
  },
  setup() { //add code for setup if needed
    return {
    }
  }
})
</script>

<style scoped lang="scss">

.Descs{
}

.Cardclass{
    text-align: left;
    }

.Tittel{
    text-align: center;
    font-size: 35px;
    }

.tilbake{
    text-align: left;
    }

</style>