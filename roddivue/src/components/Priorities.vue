<template>
  <p>Prioriteringer</p>


<table class = "prioritert" style="width:100%">
  <tr>
    <th>GjenstandID</th>
    <th>Gjenstand</th>
    <th>Verdi</th>
    <th>Prioritering 1-10</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Stol</td>
    <td>500</td>
    <td>3</td>
  </tr>

</table>

    <p>Ikke prioritert</p>


<table class = "ikkePrioritert" style="width:100%">
  <tr>
    <th>GjenstandID</th>
    <th>Gjenstand</th>
    <th>Verdi</th>
    <th>Prioritering 1- 10</th>
  </tr>
  <tr>
    <td>2</td>
    <td>Bord</td>
    <td>2500</td>
    <td>-</td>
  </tr>

</table>


  <div class="ButtonBar">
          <Button class="submit" @click="submitItem">Lagre</Button>
        </div>

</template>

<script lang="ts">
// This is a template file for future vue components, when you want want to make a new component
// copy this file.
import {defineComponent} from "vue";
import Button from 'primevue/button';
import Card from "primevue/card";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import PickList from 'primevue/picklist';


export default defineComponent({
  name: "Priorities",
  props: { Button,
    Card, Column, DataTable, ColumnGroup, PickList,
  },

  setup() { //add code for setup if needed
    return {
    }
  },
   data() {
        return {
            products: null
        }
    },
  /*
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    },
*/


})
</script>

<style scoped lang="scss">
.ButtonBar {
  margin-top: 20px;


}

</style>