<template>
  <div class="p-d-flex">
    <div class="items">
      <Button label="Large" icon="pi pi-check" class="p-button" @click="swapState">
        Opprett nytt dødsbo
      </Button>
    </div>
    <Divider layout="vertical" />
    <Card style="width: 25rem; margin-bottom: 2em" v-if="newEstate === true">
      <template #content>
        <h4>Navn på nytt Dødsbo:</h4>
        <InputText type="text" v-model="estateName"></InputText>
        <Button icon="pi pi-check" class="p-button" @click="handleClick">Send</Button>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import Button from 'primevue/button';
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Divider from 'primevue/divider';
import { NewEstateRequest } from '@/client/types';
import {createNewEstate} from "@/client/estate";

export default defineComponent({
  name: "DashboardPage",
  props: {
  },
  components: {
    Button,
    Card,
    InputText,
    Divider
  },
  setup() {
    return {
    }
  },
  methods: {
    swapState() {
      if (this.newEstate == false)
        this.newEstate = true
      else
        this.newEstate = false
    },
    handleClick(){
      const newEstateRequest: NewEstateRequest = {
        name: this.estateName,
        participants: null
      }
      createNewEstate(newEstateRequest)
      this.swapState()
    }
  },
  data() {
    return {
      estateName: "",
      newEstate: false
    }
  },
})
</script>


<style scoped lang="scss">
.items {
  position: absolute;
  left: 0;
  padding-top: 40px;
}

</style>