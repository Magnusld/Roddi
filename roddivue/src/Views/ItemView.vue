<template>
  <h2>Oversikt over eiendel</h2>
    <div class="itemPage">
      <div class="left-side">
        <ItemDesc v-bind:name="item.name"
                  v-bind:description="item.description"
                  v-bind:value="item.value"/>
      </div>
      <div class="right-side">
        <ItemChoices v-bind:itemId="id" v-if="!StoreStateAdmin"/>
        <UserItemVotes v-bind:itemId="id" v-if="StoreStateAdmin"/>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ItemDesc from "@/components/ItemDesc.vue";
import ItemChoices from "@/components/ItemChoices.vue";
import {getItemById} from "@/client/item";
import {ItemResponse} from "@/client/types";
import {store} from "@/store";
import UserItemVotes from "@/components/UserItemVotes.vue";

export default defineComponent({
  name: "ItemView",
  components: {
    UserItemVotes,
    ItemDesc,
    ItemChoices,
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  async setup(props) {
    const item: ItemResponse = {id: 0, name: '', description: '', value: 0}
    await getItemById(props.id).then(response => {
      item.id = response.id
      item.name = response.name
      item.description = response.description
      item.value = response.value
    })
    return { item }
  },
  computed: {
    StoreStateAdmin() {
      return store.getters.getAdminStatus
    }
  }
})
</script>

<style scoped lang="scss">

.itemPage {
  display: flex;
  justify-content: flex-start;
}
.left-side {
  width: 65%;
  margin-left: 2vw;
}
.right-side {
  width: 35%;
  margin-left: 2vw;
  margin-right: 2vw;
}


</style>