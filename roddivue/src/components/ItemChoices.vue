<template>
    <div class = "Beholde">
        <h5>Ønsker du gjenstanden?</h5>
        <SelectButton v-model="value1" v-on:click="wishChoice" :options="options" />
    </div>
    <div v-show="priShow" class = "Prioritering">
        <h5>Prioritering</h5>
        <Rating v-model="priority" v-on:click="rateChoice" :stars='10' :cancel="false" />
    </div>
    <div v-show="kastShow" class = "KastDoner">
        <h5>Skal gjenstanden:</h5>
        <SelectButton v-model="donate" v-on:click="kastChoice" :options="options2" />
    </div>
    <div v-show="lagreShow" class = "submit">
        <Button @click="save" label="Lagre" icon="pi pi-check" iconPos="right" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SelectButton from 'primevue/selectbutton';
import Rating from 'primevue/rating';
import Button from 'primevue/button';
import {NewUserItemPriorityRequest, NewUserItemVoteRequest} from "@/client/types";
import {setUserItemPriority} from "@/client/priorities";
import {setUserItemVote} from "@/client/votes";



export default defineComponent({
  name: "ItemChoices",
  props: {
    itemId: {
      type: Number,
      default: 0
    }
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
          priority: 0,
          donate: false,
          setDonate: null,
          options2: ['Kastes', 'Doneres bort'],
          priShow: false,
          kastShow: false,
          lagreShow: false,

      }

  },
    methods: {
      wishChoice() {
          console.log(this.value1);
          if ((this.donate == null ) || (this.priority == 0 )) {
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
          if (!(this.setDonate == null )) {
                this.lagreShow = true;
            }
        },
      rateChoice() {
          if (!(this.priority == 0 )) {
                this.lagreShow = true;
            }
        },
      save() {
        console.log(this.priority)
        console.log(this.donate)
        if (this.priShow) {
          const itemPriority: NewUserItemPriorityRequest = {
            userId: this.$store.getters.getUserID,
            itemId: this.itemId,
            priority: this.priority
          }
          setUserItemPriority(itemPriority)
        }
        else if (this.kastShow) {
          const itemVote: NewUserItemVoteRequest = {
            userId: this.$store.getters.getUserID,
            itemId: this.itemId,
            donate: this.donate
          }
          setUserItemVote(itemVote)
        }
      }
    },

})
</script>

<style scoped lang="scss">

.submit {
    padding-top: 30px;
}

</style>