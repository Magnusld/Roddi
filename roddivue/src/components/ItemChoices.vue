<template>
    <div class = "Beholde">
        <h5>Ønsker du gjenstanden?</h5>
        <SelectButton v-model="value1" v-on:click="wishChoice" :options="options" />
    </div>
    <div v-show="priShow" class = "Prioritering">
        <h5>Prioritering</h5>
        <Rating v-model="value2" v-on:click="rateChoice" :stars='10' :cancel="false" />
    </div>
    <div v-show="kastShow" class = "KastDoner">
        <h5>Skal gjenstanden:</h5>
        <SelectButton v-model="value3" v-on:click="kastChoice" :options="options2" />
    </div>
    <div v-show="lagreShow" class = "submit">
        <Button label="Lagre" icon="pi pi-check" iconPos="right" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SelectButton from 'primevue/selectbutton';
import Rating from 'primevue/rating';
import Button from 'primevue/button';



export default defineComponent({
  name: "ItemChoices",
  props: { //add props here if needed
  },
  components: {
      SelectButton,
      Rating,
      Button
    },
  setup() { //add code for setup if needed
    return {
    }
  },
  data() {
      return {
          value1: null,
          options: ['Ja', 'Nei'],
          value2: null,
          value3: null,
          options2: ['Kastes', 'Doneres bort'],
          priShow: false,
          kastShow: false,
          lagreShow: false,

      }

  },
    methods: {
      wishChoice() {
          console.log(this.value1);
          if ((this.value3 == null ) || (this.value2 == null )) {
                this.lagreShow = false;
            }
        if (this.value1 == "Nei") {
            console.log("Nei");
            this.priShow = false;
            this.kastShow = true;

        } else {
            console.log("Ja");
            this.priShow = true;
            this.kastShow = false;
        }


      },
      kastChoice() {
          if (!(this.value3 == null )) {
                this.lagreShow = true;
            }
        },
      rateChoice() {
          if (!(this.value2 == null )) {
                this.lagreShow = true;
            }
        },
    },

})
</script>

<style scoped lang="scss">

.submit {
    padding-top: 30px;
}

</style>