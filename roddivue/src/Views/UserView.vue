<template>
  <Card>
    <template #title>
      <div class="title">
      <p>Profil</p>
      </div>
    </template>
    <template #content>
      <div class="p-d-flex">
        <UserPage class="userPage"/>
        <div class="estateList">
          <Card>
          <template #title>
            <p v-if="StoreStateAdmin">Alle Dødsbo</p>
            <p v-else> Mine Dødsbo</p>
          </template>
          <template #content>
            <EstatesView />
          </template>
        </Card>
        <Card v-if="!StoreStateAdmin">
          <template #content>
            <router-link to="/priorities">
            <Button class="p-button-text" style="font-size: large">
              Mine Prioriteringer
            </Button>
            </router-link>
          </template>
        </Card>
          <Card>
          <template #title>
            <p v-if="StoreStateAdmin">Alle Oppgjør</p>
            <p v-else> Mine Oppgjør</p>
          </template>
          <template #content>
            <SettlementsView />
          </template>
        </Card>
        </div>
      </div>
    </template>
  </Card>


</template>

<script lang="ts">
import { defineComponent } from "vue"
import UserPage from "@/components/UserPage.vue"
import EstatesView from "@/components/EstatesView.vue";
import SettlementsView from "@/components/SettlementsView.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import {getCurrentUserId} from "@/client/user";

export default defineComponent({
  name: "UserView",
  components: {
    EstatesView,
    SettlementsView,
    UserPage,
    Card,
    Button
  },
  async setup() {
    let id = 0
    await getCurrentUserId().then(response => {
      id = response
    })
    return {
      id
    }
  },
  computed: {
    StoreStateAdmin() {
      return this.$store.getters.getAdminStatus
    }
  }
})
</script>

<style scoped lang="scss">
.userPage {
  display-model: flex;
  width: 50%;
}
.estateList {
  display-model: flex;
  width: 50%;
}
.p-d-flex {
  justify-content: space-around;
}
.title {
  position: relative;
  right: 40%;
  font-size: xxx-large;
}

</style>