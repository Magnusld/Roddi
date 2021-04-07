<template>
  <Button label="Test" v-on:click="insertItem('stol', 'Bruker2', '230 kr')"/>
  <div class="grid-container" id="grid-container">
    <div class="grid-user1" id="grid-user1">
      <p>Bruker1</p>
    </div>
    <div class="grid-user2" id="grid-user2">
      <p>Bruker2</p>
    </div>
    <div class="grid-user3" id="grid-user3">
      <p>Bruker3</p>
    </div>
    <div class="grid-user4" id="grid-user4">
      <p>Bruker4</p>
    </div>
    <div class="grid-user5" id="grid-user5">
      <p>Bruker5</p>
    </div>
    <div class="grid-user6" id="grid-user6">
      <p>Bruker6</p>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Button from "primevue/button";
import {ItemResponse} from "@/client/types";
import {getAllItems} from "@/client/item";


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
    for (let i = 0; i < items.length; i++) {
        const user = items[i];
        if (user.owner != null) {
          (this as any).insertItem(user.name, user.owner, user.value);

        }
    }

    return {
        items
    }
  },

  data() {
      return {
          a: 2,
          b: 2,
          c: 2,
          d: 2,
          e: 2,
          f: 2,
    }
  },
  components: {
    Button
  },
  methods: {
      //Må håndtere at det går nedover i grid rows, og starter i 2
    handleColumn(index: number) {
      if (index === 1) {
          const t = this.a;
          const str = t.toString() + " / " + (t + 1).toString();
          this.a = t + 1;
          return str;
      } else if (index === 2) {
          const t = this.b;
          const str = t.toString() + " / " + (t + 1).toString();
          this.b = t + 1;
          return str;
      } else if (index === 3) {
          const t = this.c;
          const str = t.toString() + " / " + (t + 1).toString();
          this.c = t + 1;
          return str;
      } else if (index === 4) {
          const t = this.d;
          const str = t.toString() + " / " + (t + 1).toString();
          this.d = t + 1;
          return str;
      } else if (index === 5) {
          const t = this.e;
          const str = t.toString() + " / " + (t + 1).toString();
          this.e = t + 1;
          return str;
      } else if (index === 6) {
          const t = this.f;
          const str = t.toString() + " / " + (t + 1).toString();
          this.f = t + 1;
          return str;
      }
    },
    insertItem(name: string, owner: string, value: number ) {
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
      const rows = this.handleColumn(colum);
      console.log(rows);
      element.setAttribute("style", (gridCol + "; grid-row: " + rows));

    }
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