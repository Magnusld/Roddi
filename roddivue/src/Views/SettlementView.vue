<template>
  <div>
    <SettlementTitle/>
  </div>

  <div class="p-d-inline-flex">
    <DataTable v-for="user in userGetItemInSettlement"
               :key="user.userId"
               :value="user.items">
      <Column field="name" :header="user.userName"/>
    </DataTable>
  </div>
  <SettlementThrow/>
</template>


<script lang="ts">
// This is a template file for future vue views, when you want want to make a new view
// copy this file.
import {defineComponent} from "vue"
import SettlementTitle from "@/components/SettlementTitle.vue";
import SettlementThrow from "@/components/SettlementThrow.vue";
import {EstateResponse, ItemResponse, UserGetItem} from "@/client/types";
import {getSettlementById} from "@/client/settlement";
import Column from "primevue/column";
import DataTable from "primevue/datatable";

export default defineComponent({
  name: "OppgjørView", // name should in most cases be the same as the file name
  props: {
    id: {
      type: Number,
      default: 0
    }
  },

  // Kanskje ikke nødvendig?

  async setup(props) {
    const estate: EstateResponse = {id: 0, name: '', items: null, participants: null}
    const userGetItemInSettlement: UserGetItem[] = []
    try {
      await getSettlementById(props.id).then(promise => {
        estate.id = promise.id
        estate.name = promise.name
        estate.items = promise.items
        estate.participants = promise.participants
      })
      console.log(estate)
    } catch (e) {
      console.error(e)
    }
    estate.participants?.forEach(user => {
      const itemList: ItemResponse[] = []
      const belonging: UserGetItem = {
        userId: user.id,
        userName: user.username,
        items: itemList
      }
      estate.items?.forEach(item => {
        if (belonging.userId == item.owner) {
          belonging.items.push(item)
        }
      })
      userGetItemInSettlement.push(belonging)
    })
    /*
    estate.items?.forEach(item => {
      userGetItemInSettlement.forEach(user => {
        if (user.userId == item.owner){

        }
      })
    })
    */
    console.log(userGetItemInSettlement)
    return {
      estate,
      userGetItemInSettlement
    }

  },


  components: { // add the components that the view should show

    SettlementTitle,
    //SettlementOverview,
    SettlementThrow,

    DataTable,
    Column,
  }
})
</script>

<style scoped lang="scss">


</style>