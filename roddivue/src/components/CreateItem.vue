<template>


  <div class="InputFields">
            <span class="p-float-label InputField">
              <InputText id="TypeGjenstand" type="text" />
            </span>
          </div>

  <Card class="card">
    <InputText type="text" v-model="value1" />
  </Card>

   <!--- <Card class = "InputToFile">
      <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText type="text" v-model="value1" placeholder="Search" />
      </span>
    </Card>
-->
   <div class="ButtonBar">
          <Button class="submit" @click="$router.push('Items')">Legg til gjenstand</Button>
        </div>





</template>

<div>

</div>


<script lang="ts">
import {defineComponent} from "vue";
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';




export default defineComponent({
  name: "CreateItem",
  components: {
    InputText,
    Card,
    Button,
  },
  props: {
  },
  setup() { //add code for setup if needed
    return {
    }
  },
  data() {
		return {
            value1: null,

		}
	}
})
</script>

<style scoped lang="scss">

.InputFields {

}

.card {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 533px;
  width: 200px;
  height: 300px;
}



</style>