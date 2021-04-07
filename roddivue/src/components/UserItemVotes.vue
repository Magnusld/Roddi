<template>
  <DataTable :value="UserVotes">
    <Column field="userName" header="Navn" sortable="true"/>
    <Column field="vote" header="Stemme/ Prioritering" sortable="true"/>
  </DataTable>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DataTable from "primevue/datatable";
import {UserVote} from "@/client/types";
import {getAllItemVote} from "@/client/votes";
import Column from "primevue/column";

export default defineComponent({
  name: "UserItemVotes",
  props: {
    itemId: {
      type: Number,
      default: 0
    }
  },
  components: {
    DataTable,
    Column
  },
  async setup(props) {
    const UserVotes: UserVote[] = []
    await getAllItemVote(props.itemId).then(promise => {
      promise.forEach(i => UserVotes.push(i))
    })
    return {
      UserVotes
    }
  }
})
</script>

<style scoped lang="scss">

</style>