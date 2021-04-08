<template>
  <div class="p-d-flex">
    <div class="items">
      <div class="toggleButtons">
        <Button label="Large" icon="pi pi-check" class="p-button" @click="swapEstateState">
        Opprett nytt dødsbo
      </Button>
      </div>
      <div class="toggleButtons">
      <Button label="Large" icon="pi pi-check" class="p-button" @click="swapItemState">
        Legg til ny gjenstand
      </Button>
      </div>
      <div class="toggleButtons">
      <Button label="Large" icon="pi pi-check" class="p-button" @click="swapSettleState">
        Gjør opp Oppgjør
      </Button>
      </div>
    </div>
    <Divider layout="vertical" />
    <Card style="width: 25rem; margin-bottom: 2em" v-if="newEstate === true">
      <template #content>
        <h4>Navn på nytt Dødsbo:</h4>
        <InputText type="text" v-model="estateName"></InputText>
        <Button icon="pi pi-check" class="p-button" @click="createNewEstate">Send</Button>
      </template>
    </Card>
    <CreateItem v-if="newItem"/>
    <SettleEstate v-if="newSettle"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import Button from 'primevue/button';
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Divider from 'primevue/divider';
import {EstateResponse, NewEstateRequest} from '@/client/types';
import {createNewEstate, getAllEstates, settleEstate} from "@/client/estate";
import CreateItem from "@/components/CreateItem.vue";
import SettleEstate from "@/components/SettleEstate.vue";

export default defineComponent({
  name: "AdminPage",
  props: {
  },
  components: {
    CreateItem,
    Button,
    Card,
    InputText,
    Divider,
    SettleEstate
  },
  methods: {
    swapEstateState() {
      this.newEstate = !this.newEstate
    },
    swapItemState() {
      this.newItem = !this.newItem
    },
    swapSettleState() {
      this.newSettle = !this.newSettle
    },
    createNewEstate(){
      const newEstateRequest: NewEstateRequest = {
        name: this.estateName,
        participants: null
      }
      createNewEstate(newEstateRequest)
      this.swapEstateState()
    },
  },
  data() {
    return {
      estateName: "",
      newEstate: false,
      ItemName: "",
      newItem: false,
      newSettle: false,
    }
  },
})
</script>


<style scoped lang="scss">
.items {
  position: absolute;
  left: 0;
  padding-top: 40px;
  padding-left: 20px;
}
.toggleButtons {
  padding: 2px;
}

</style>