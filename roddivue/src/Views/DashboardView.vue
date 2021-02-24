<template>
  <p>Min side</p>

  <div
      class="p-d-flex">
    <DashboardPage/>
  </div>
</template>

<script lang="ts">
import DashboardPage from "@/components/DashboardPage.vue";
import { defineComponent } from "vue"

export default defineComponent({
  name: "DashboardView", // name should in most cases be the same as the file name
  components: {DashboardPage,

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