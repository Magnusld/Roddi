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
        <SelectButton v-model="donateString" v-on:click="kastChoice" :options="options2" />
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
import {getLoggedInUserItemPriority, removeUserItemPriority, setUserItemPriority} from "@/client/priorities";
import {getLoggedInUserItemVote, removeUserItemVote, setUserItemVote} from "@/client/votes";



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
  async setup(props) {
    let priority = 0
    let havePreviousPriority = false
    let previousPriorityId = 0
    let donate = false
    let havePreviousVote = false
    let previousVoteId = 0
    let donateString = ""
    await getLoggedInUserItemPriority(props.itemId).then(response => {
      if (!(response.priority == 0)) {
        priority = response.priority
        havePreviousPriority = true
        previousPriorityId = response.id
      }
    console.log(priority)
    })
    if (!havePreviousPriority) {
       await getLoggedInUserItemVote(props.itemId).then(response => {
            if (response.donate) {
              donate = response.donate
              havePreviousVote = true
              previousVoteId = response.id
            }
            console.log(donate)
          })
    }
    if (donate) {
      donateString = "Doneres bort"
    }
    else if (havePreviousVote) {
      donateString = "Kastes"
    }
    return {
      priority,
      havePreviousPriority,
      previousPriorityId,
      donate,
      havePreviousVote,
      previousVoteId,
      donateString
    }
  },
  data() {
      return {
          value1: null,
          options: ['Ja', 'Nei'],
          options2: ['Kastes', 'Doneres bort'],
          priShow: false,
          kastShow: false,
          lagreShow: false,
      }
  },
    methods: {
      wishChoice() {
        console.log(this.value1);
        if (this.priority == 0) {
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
        this.lagreShow = true
      },
      rateChoice() {
        if (!(this.priority == 0)) {
          this.lagreShow = true;
        }
      },

      async save() {
        if (!(this.donateString == "")) {
          if (this.donateString == "Doneres bort") {
            this.donate = true
          }
          else {
            this.donate = false
          }
        }
        console.log(this.priority)
        console.log(this.donate)
        if (this.priShow) {
          if (this.havePreviousPriority) {
            await removeUserItemPriority(this.previousPriorityId).then(response => {
              console.log("PreviousPriority have been deleted")
              console.log(response)
            })
          }
          if (this.havePreviousVote) {
            await removeUserItemVote(this.previousVoteId).then(response => {
              console.log("PreviousVote have been deleted")
              console.log(response)
            })
          }
          const itemPriority: NewUserItemPriorityRequest = {
            userId: this.$store.getters.getUserID,
            itemId: this.itemId,
            priority: this.priority
          }
          await setUserItemPriority(itemPriority)
        } else if (this.kastShow) {
          if (this.havePreviousVote) {
            await removeUserItemVote(this.previousVoteId).then(response => {
              console.log("PreviousPriority have been deleted")
              console.log(response)
            })
          }
          if (this.havePreviousPriority) {
            await removeUserItemPriority(this.previousPriorityId).then(response => {
              console.log("PreviousVote have been deleted")
              console.log(response)
            })
          }
          const itemVote: NewUserItemVoteRequest = {
            userId: this.$store.getters.getUserID,
            itemId: this.itemId,
            donate: this.donate
          }
          await setUserItemVote(itemVote)
        }
      }
    }
})
</script>

<style scoped lang="scss">

.submit {
    padding-top: 30px;
}

</style>