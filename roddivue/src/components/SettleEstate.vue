<template>
  <Card style="width: 25rem; margin-bottom: 2em" >
      <template #content>
        <h4>Velg dødsbo som skal gjøres opp:</h4>
        <Dropdown id="EstateId" v-model="estateId"
                        :options="estates"
                        optionLabel="name"
                        optionValue="id"
                        placeholder="Velg dødsbo"/>
        <Button icon="pi pi-check" class="p-button" @click="settleEstate">Send</Button>
      </template>
    </Card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
import {EstateResponse} from "../client/types";
import {getAllEstates, settleEstate} from "../client/estate";

export default defineComponent({
  name: "SettleEstate",
  props: { //add props here if needed
  },
  components: {
    Dropdown,
    Card
  },
  async setup() {
    const estates: EstateResponse[] = []
    await getAllEstates().then(response => {
      for (let i = 0; i < response.length; i++) {
        estates.push(response[i])
      }
    })
    return {
      estates
    }
  },
  data() {
    return {
      estateId: 0,
      name: ''
    }
  },
  methods: {
    settleEstate() {
      settleEstate(this.estateId)
    }
  }
})
</script>

<style scoped lang="scss">

</style>