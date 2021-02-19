<template>
  <Card class="loginPage">
    <template #title>
      <h3>Innlogging</h3>
    </template>
    <template #content>
      <div class="p-fluid">
        <div class="InputFields">
          <span class="p-float-label InputField">
            <InputText id="username" type="text" v-model="brukernavn" :dropdown="false"/>
            <label for="username">Brukernavn</label>
          </span>
          <span class="p-float-label">
            <Password id="password" toggleMask :feedback="false" v-model="passord"></Password>
            <label for="password">Passord</label>
          </span>
        </div>
      </div>
      <div class="ButtonBar">
        <Button class="p-button-raised">Logg inn</Button>
        <Button class="p-button-text">Opprett ny bruker</Button>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default defineComponent({
  name: "LogInPage",
  components: {
    InputText,
    Password,
    Card,
    Button
  },
  data() {
    return {
      brukernavn: "",
      passord: ""
    }
  },
  props: {
  },
  setup() {
    return {
    }
  }
});
</script>

<style scoped lang="scss">

.loginPage {
  align-self: center;
  max-width: 500px;
  width: 90%;
}

.InputField {
  margin-bottom: 25px;
}

.ButtonBar{
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
}

</style>