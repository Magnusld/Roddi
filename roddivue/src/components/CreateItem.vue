<template>
  <div class="InputFields">
            <span class="p-field InputField">
              <label for="itemName">Navn på gjenstand: </label>
              <InputText id="itemName" type="text" v-model="name"/>
            </span>
          </div>

   <div class="InputFields2">
            <span class="p-field InputField">
              <label for="itemValue">Verdi på gjenstand: </label>
              <InputText id="itemValue" type="text" v-model="value" />
            </span>
          </div>
  <!-- <Card class="card">
    <h5>Left Icon</h5>
    <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText type="text" v-model="value1" placeholder="Search" />
    </span>
  </Card> -->
  <span class="p-field">
    <p>Beskrivelse av gjenstand: </p>
    <textarea id="itemDescription" class="Tekstboks" v-model="description"/>
  </span>
  <!--
  <div class="filDiv">
  <FileUpload class = "filer" name="demo[]" url="./upload" :multiple="true" />
  </div>
  -->
   <div class="ButtonBar">
          <Button class="submit" @click="submitItem">Legg til gjenstand</Button>
        </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {NewItemRequest} from "@/client/types";
import {createNewItem} from "@/client/item";
//import FileUpload from 'primevue/fileupload';

export default defineComponent({
  name: "CreateItem",
  components: {
    InputText,
    Button,
    //FileUpload,
  },
  props: {
    estateId: {
      type: Number,
      default: 8
    }
  },
  setup() {
    return {
    }
  },
  methods: {
    submitItem() {
      const item: NewItemRequest = {
        name: this.name,
        value: this.value,
        description: this.description,
        belongsTo: this.estateId
      }
      createNewItem(item).catch(error =>
      console.log(error))
    }
  },
  data() {
		return {
            name: '',
            value: 0,
            description: '',
		}
	},
})
</script>

<style scoped lang="scss">

.InputFields2 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.Tekstboks {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
}

.filDiv{
  max-width: 400px;
  margin-left: 432px;
  margin-bottom: 10px;
}
</style>