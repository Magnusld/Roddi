<template class="settlementPage">
  <div>
    <SettlementTitle/>
  </div>
  <Card class="listCard">
    <template #content>
      <div class="p-d-inline-flex">
        <DataTable v-for="user in userGetItemInSettlement"
                   :key="user.userId"
                   :value="user.items">
          <Column field="name" :header="user.userName"/>
        </DataTable>
      </div>
      <SettlementThrow v-bind:id="id"/>
    </template>
  </Card>
</template>


<script lang="ts">
import {defineComponent} from "vue"
import SettlementTitle from "@/components/SettlementTitle.vue";
import SettlementThrow from "@/components/SettlementThrow.vue";
import {EstateResponse, ItemResponse, UserGetItem} from "@/client/types";
import {getSettlementById} from "@/client/settlement";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Card from "primevue/card";

export default defineComponent({
  name: "OppgjørView",
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
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

    console.log(userGetItemInSettlement)
    return {
      estate,
      userGetItemInSettlement
    }

  },

  components: {
    SettlementTitle,
    SettlementThrow,
    DataTable,
    Column,
    Card
  }
})
</script>

<style scoped lang="scss">
.settlementPage {
  display: flex;
  justify-content: flex-start;
}
.listCard{
  margin-right: 3vw;
  margin-left: 3vw;
}
</style>