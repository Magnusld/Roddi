<template>
  <div class="items">
    <Button label="Large" icon="pi pi-check" class="p-button">
      Opprett dødsbo
    </Button>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import Button from 'primevue/button';
export default defineComponent({
  name: "DashboardPage",
  props: {
  },
  components: {
    Button
  },
  setup() {
    return {
    }
  },
  methods: {
  }
})
</script>


<style scoped lang="scss">
.items {
  justify-content: left;
}

</style>