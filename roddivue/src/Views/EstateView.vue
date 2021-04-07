<template>
    <h2>{{estate.name}}</h2>
    <div class="estatePage">
      <div class="left-side">
          <Card class="right-side-cards">
            <template #title>
              Beskrivelse
            </template>
            <template #content>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. "
            </template>
          </Card>
          <Card class="right-side-cards">
            <template #title>
              Deltakere
            </template>
            <template #content>
              <ScrollPanel style="width: 100%; height: 150px">
                <p v-for="participant in estate.participants"
                v-bind:key="estate.participants.indexOf(participant)">
                  {{participant.username}}
                </p>
              </ScrollPanel>
            </template>
          </Card>
      </div>
      <Divider layout="vertical"/>
      <div class="right-side">
        <Card class="cards">
          <template #title>
            Gjenstander:
          </template>
          <template #content>
            <ItemList v-bind:items="estate.items"/>
          </template>
        </Card>
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import Card from "primevue/card";
import Divider from "primevue/divider";
import {EstateResponse} from "@/client/types";
import ItemList from "@/components/ItemList.vue";
import {getEstateById} from "@/client/estate";
import ScrollPanel from "primevue/scrollpanel";

export default defineComponent({
  name: "EstateView",
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  components: {
    ItemList,
    Card,
    Divider,
    ScrollPanel,
  },
  async setup(props) {
    const estate: EstateResponse = {id: 0, name: '', items: null, participants: null}
    try {
      await getEstateById(props.id).then(promise => {
        estate.id = promise.id
        estate.name = promise.name
        estate.items = promise.items
        estate.participants = promise.participants
      })
      console.log(estate)
    } catch (e) {
      console.error(e)
    }
    return {
      estate
    }
  },
})
</script>

<style scoped lang="scss">

.estatePage {
  display: flex;
  justify-content: flex-start;
}
.left-side {
  max-width: 65%;
}
.right-side {
  min-width: 35%;
}
.cards {
  min-height: 500px;
}
.right-side-cards {
  height: 250px;
}

</style>