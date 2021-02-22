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
          <Button type="submit" class="p-button-raised">Logg inn</Button>
          <Button class="p-button-text">Opprett ny bruker</Button>
        </div>
      </form>
    </template>
  </Card>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Card from 'primevue/card';
import Button from 'primevue/button';
import axios from "axios";

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
      username: "",
      password: ""
    }
  },
  methods: {
    submitForm() {
      axios.defaults.headers.common["Authorization"] = ""
      localStorage.removeItem("token")
      const formData = {
          username: this.username,
          password: this.password
      }
      axios
          .post("/api/token/login/", formData)
          .then(response => {
              const token = response.data.auth_token

              this.$store.commit('setToken', token)

              axios.defaults.headers.common["Authorization"] = "Token " + token

              console.log(token)

              localStorage.setItem("token", token)

              this.$router.push('')
          })
          .catch(error => {
              if (error.response) {
                  for (const property in error.response.data) {
                      //this.errors.push(`${property}: ${error.response.data[property]}`)
                  }
                  console.log(JSON.stringify(error.response.data))
              } else if (error.message) {
                  console.log(JSON.stringify(error.message))
              } else {
                  console.log(JSON.stringify(error))
              }
          })
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
