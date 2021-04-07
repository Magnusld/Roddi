<template>
  <Button label="Test" v-on:click="insertItem('stol', 'Bruker2', '230 kr')"/>
  <div class="grid-container" id="grid-container">
    <div class="grid-user1" id="grid-user1">
      <p>Bruker1</p>
    </div>
    <div class="grid-user2" id="grid-user2">
      <p>admin</p>
    </div>
    <div class="grid-user3" id="grid-user3">
      <p>user1</p>
    </div>
    <div class="grid-user4" id="grid-user4">
      <p>user2</p>
    </div>
    <div class="grid-user5" id="grid-user5">
      <p>user3</p>
    </div>
    <div class="grid-user6" id="grid-user6">
      <p>newuser123</p>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Button from "primevue/button";
import {ItemResponse} from "@/client/types";
import {getAllItems} from "@/client/item";
import {getUserById} from "@/client/user";


export default defineComponent({
  name: "SettlementOverview",
  props: {
      id: {
      type: Number,
      default: 0
      },
      itemList: {
        default: [],
        type: Array as PropType<ItemResponse[]>
      },

  },


  async setup(props) {
    // Lage lista over items
    const items = new Array<ItemResponse>();
      try {
        await getAllItems(props.id).then(promise => {
            // Må få inn lista over items
            for (let i = 0; i < promise.length; i++) {
              items.push(promise[i]);
            }
        })
      } catch (e) {
      console.error(e)
      }

    // iterere gjennom liste for å legge inn i frontend


    return {
        items
    }
  },
  async mounted(){
    let a = 2
    let b = 2
    let c = 2
    let d = 2
    let e = 2
    let f = 2

    function handleColumn(index: number) {
      if (index === 1) {
          const t = a;
          const str = t.toString() + " / " + (t + 1).toString();
          a = t + 1;
          return str;
      } else if (index === 2) {
          const t = b;
          const str = t.toString() + " / " + (t + 1).toString();
          b = t + 1;
          return str;
      } else if (index === 3) {
          const t = c;
          const str = t.toString() + " / " + (t + 1).toString();
          c = t + 1;
          return str;
      } else if (index === 4) {
          const t = d;
          const str = t.toString() + " / " + (t + 1).toString();
          d = t + 1;
          return str;
      } else if (index === 5) {
          const t = e;
          const str = t.toString() + " / " + (t + 1).toString();
          e = t + 1;
          return str;
      } else if (index === 6) {
          const t = f;
          const str = t.toString() + " / " + (t + 1).toString();
          f = t + 1;
          return str;
      }
    }
    function insertItem(name: string, owner: string, value: number ) {
      // Opprette HTML klasse og element
      // Sette inn paragraph med navn og verdi
      const element = document.createElement("div");
      element.classList.add(name);
      const info = document.createElement("p");
      info.textContent = name;
      const verdi = document.createElement("p");
      verdi.textContent = value.toString();
      element?.appendChild(info);
      element?.appendChild(verdi);
      // Finne hvilken kolonne den skal i
      let colum = 1;
      for (let i = 1; i < 7; i++) {
          const bruker = "grid-user" + i.toString();
          //console.log(bruker);
          const usernameHtml = document.getElementById(bruker);
          if (usernameHtml === null) {
            console.log("uff");
          }
          const username = usernameHtml!.textContent;
          if (username === owner) {
            colum = i;
          }
      }
      console.log(colum);
      document.getElementById("grid-container")!.appendChild(element);
      // Plassere elementet i kolonnen
      const columnIndex = colum.toString() + " / " + (colum + 1).toString();
      const gridCol = "grid-column: " + columnIndex;
      console.log(gridCol)
      const rows = handleColumn(colum);
      console.log(rows);
      element.setAttribute("style", (gridCol + "; grid-row: " + rows));

    }
    for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        const user = await getUserById(item.id);
        if (item.owner != null) {
          insertItem(item.name, user.username, item.value);
        }
    }
  },
  components: {
    Button
  },
  methods: {
      //Må håndtere at det går nedover i grid rows, og starter i 2

  }
})

</script>

<style scoped lang="scss">

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 60px;
  }

  /* Legge inn linjer i grid-container */

</style>