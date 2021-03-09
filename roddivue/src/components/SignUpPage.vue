<template>
    <Card class="loginPage">
    <template #title>
      <h3>Innlogging</h3>
    </template>
    <template #content>
      <form @submit.prevent="submitForm">
        <div class="p-fluid">
          <div class="InputFields">
            <span class="p-float-label InputField">
              <InputText id="email" type="text" v-model="email" :dropdown="false"/>
              <label for="email">E-post</label>
            </span>
            <span class="p-float-label InputField">
              <InputText id="username" type="text" v-model="username" :dropdown="false"/>
              <label for="username">Brukernavn</label>
            </span>
            <span class="p-float-label">
              <Password id="password" toggleMask :feedback="false" v-model="password"></Password>
              <label for="password">Passord</label>
            </span>
          </div>
        </div>
        <div class="ButtonBar">
          <Button type="submit" class="p-button-text">Opprett ny bruker</Button>
        </div>
      </form>
    </template>
  </Card>
</template>

<script lang="ts">
// This is a template file for future vue components, when you want want to make a new component
// copy this file.
import {defineComponent} from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Card from "primevue/card";
import Button from "primevue/button";
import {SignUpRequest} from "@/client/types";
import {signup} from "@/client/login";

export default defineComponent({
  name: "SignUpPage",
  components: {
    InputText,
    Password,
    Card,
    Button
  },
  data() {
    return {
      email: "",
      username: "",
      password: ""
    }
  },
  methods: {
    submitForm(){
      const signupRequest: SignUpRequest = {
        email: this.email,
        username: this.username,
        password: this.password,
      }
      signup(signupRequest)
    }
  }
})
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