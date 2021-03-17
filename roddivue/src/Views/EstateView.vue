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
              <p> - Magnus </p>
              <p> - Bjørn </p>
              <p> - Yngve </p>
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
          <!--
            <ItemList v-bind:items="[{
    key: 1,
    id: 1,
    name: 'TestGjenstand 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
    key: 2,
    id: 2,
    name: 'TestGjenstand 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
    key: 3,
    id: 3,
    name: 'TestGjenstand 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
    key: 4,
    id: 4,
    name: 'TestGjenstand 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }]"/>
            -->
          </template>
        </Card>
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import Card from "primevue/card";
import Divider from "primevue/divider";
import {EstateResponse, ItemResponse, UserResponse} from "@/client/types";
import ItemList from "@/components/ItemList.vue";
import {getEstateById} from "@/client/estate";

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