<template>
  <DataTable>
  </DataTable>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DataTable from "primevue/datatable";
import {UserVote} from "@/client/types";
import {getAllUserVotes} from "@/client/user";

export default defineComponent({
  name: "UserItemVotes",
  props: {
  },
  components: {
    DataTable,
  },
  async setup() {
    const UserVotes: UserVote[] = []
    const users: number[] = []
    await getAllUserVotes(users)
    return {
      UserVotes
    }
  }
})
</script>

<style scoped lang="scss">

</style>