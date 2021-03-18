<template>


  <div class="InputFields">

            <span class="p-float-label InputField">
              <InputText id="TypeGjenstand" type="text" v-model="navn" />
              <label for="TypeGjenstand"></label>
            </span>
          </div>

   <div class="InputFields2">

            <span class="p-float-label InputField">
              <InputText id="VerdiGjenstand" type="text" v-model="verdi" />
              <label for="VerdiGjenstand"></label>
            </span>
          </div>



  <!-- <Card class="card">
    <h5>Left Icon</h5>
    <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText type="text" v-model="value1" placeholder="Search" />
    </span>
  </Card> -->

<h6>Beskrivelse av gjenstand</h6>

  <textarea class = "Tekstboks" v-model="beskrivelse" >
  </textarea>


  <div class="filDiv">
  <FileUpload class = "filer" name="demo[]" url="./upload" :multiple="true" />
  </div>


   <div class="ButtonBar">
          <Button class="submit" @click="$router.push('Items')">Legg til gjenstand</Button>
        </div>

</template>



<script lang="ts">
import {defineComponent} from "vue";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FileUpload from 'primevue/fileupload';



export default defineComponent({
  name: "CreateItem",
  components: {
    InputText,
    Button,
    FileUpload,

  },
  props: {
    estateId: {
      type: Number,
      default: 0
    }
  },
  setup() {
    return {
    }
  },
  data() {
		return {
            navn: null,
            verdi: null,
            beskrivelse: null,
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