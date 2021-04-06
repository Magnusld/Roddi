<template>
  <h1>Prioriteringer</h1>

  <DataTable :value="userItems" >
    <Column field="name" header="Navn" sortable="true"/>
    <Column field="value" header="Verdi" sortable="true"/>
    <Column field="estateName" header="Dødsbo" sortable="true"/>
    <Column field="userPriority" header="Prioritet" sortable="true"/>
  </DataTable>


</template>

<script lang="ts">
import {defineComponent} from "vue";
import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import {ItemDisplay} from "@/client/types";
import {getAllEstates} from "@/client/estate";
import {getAllEstateItems} from "@/client/item";
import {getLoggedInUserItemPriority} from "@/client/priorities";
import {getLoggedInUserItemVote} from "@/client/votes";

export default defineComponent({
  name: "Priorities",
  components :{
    DataTable,
    Column
  },
  props: {

  },
  async setup() {
    const userItems: ItemDisplay[] = []
    const userEstates: [number, string][] = []
    await getAllEstates().then(response => {
      response.forEach(i => userEstates.push([i.id,i.name]))
    })
    for (const i of userEstates) {
      await getAllEstateItems(i[0]).then(response => {
        response.forEach( j => {
          const itemDis: ItemDisplay = {
            itemId: j.id,
            name: j.name,
            value: j.value,
            estateName: i[1],
            userPriority: 0
          }
          userItems.push(itemDis)
        })
      })
    }
    for (let i = 0; i < userItems.length; i++) {
      await getLoggedInUserItemPriority(userItems[i].itemId).then(response => {
        userItems[i].userPriority = response.priority
      })
    }
    for (let i = 0; i < userItems.length; i++) {
      await getLoggedInUserItemVote(userItems[i].itemId).then(response => {
        if (userItems[i].userPriority == 0){
          if (response.donate) {
            userItems[i].userPriority = "Doneres"
          }
          else {
            userItems[i].userPriority = "Kastes"
          }
        }
      })
    }
    return {
      userItems
    }
  },
})
</script>

<style scoped lang="scss">
.ButtonBar {
  margin-top: 20px;


}

</style>