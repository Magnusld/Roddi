<template>
    <DashboardPage/>
</template>

<script lang="ts">
import DashboardPage from "@/components/DashboardPage.vue";
import { defineComponent } from "vue"


export default defineComponent({
  name: "DashboardView",
  components: {
    DashboardPage,
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