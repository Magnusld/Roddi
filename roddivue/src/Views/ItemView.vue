<template>
  <div class="grid-container">
    <div class="grid-item-1">
      <ItemDesc v-bind:name="item.name"
                v-bind:description="item.description"/>
    </div>
    <div class="grid-item-2">
      <ItemChoices v-bind:itemId="id" v-if="!StoreStateAdmin"/>
      <UserItemVotes v-bind:itemId="id" v-else/>
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

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-item-2 {
  padding-top: 110px;
}

</style>