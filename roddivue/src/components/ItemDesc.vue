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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
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