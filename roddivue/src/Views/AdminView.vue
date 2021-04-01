<template>
    <AdminPage/>
</template>

<script lang="ts">
import AdminPage from "@/components/AdminPage.vue";
import { defineComponent } from "vue"


export default defineComponent({
  name: "AdminView",
  components: {
    AdminPage,
  },
   props: {
  }
})
</script>

<style scoped lang="scss">

.p-d-flex {
  justify-content: center;
}

</style>