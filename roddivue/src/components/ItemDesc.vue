<template>
    <Card class = "Cardclass">
    <template #title>
        <div class = "Tittel">Navn</div>
    </template>
</Card>
  <Card class = "Cardclass">
    <template #title>
        Beskrivelse
    </template>
    <template #content>
        <div class = "Descs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
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
// This is a template file for future vue components, when you want want to make a new component
// copy this file.
import {defineComponent} from "vue";
import Card from 'primevue/card';


export default defineComponent({
  name: "ItemDesc",
  components: {
      Card,
    },
  props: { //add props here if needed
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

</style>