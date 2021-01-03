<template>
    <div  >
        <CardLayout :items="getGames" :title="`Games`" :page="`games`" >
            <template scope="item">
                <div>              
                    <div>{{ item.name }}</div>
                    <div> {{ item.date }}</div>
                    <div>{{ item.rating }}</div>
                </div>
            </template>
        </CardLayout>
    </div>
</template>

<script>
import CardLayout from "../components/General/CardLayout";
//import Debug from "../components/General/Debug";

export default {
  name: "Games",
  components: { CardLayout },
  computed: {
    getGames() {
      return this.$store.getters.getGames;
      //this.$store.commit("saveUsername", this.noteText);
    },
  },
};
</script>

<style lang="scss">

  .block {
    
    border: 2px solid gray;
    border-radius: 4px;
  }

  .grid-container.games {
    display: grid;
    list-style: none;
    grid-template: 
    'title title title'
    'body1 body2 body2' 
    'body1 body3 body3'
    'body4 body4 body4'
    'body5 body5 body5';
    grid-gap: 10px;
    padding: 10px;
    align-content: stretch;
  }

  .title {
      color: rgb(0, 151, 63);
      font-size: 1.5rem;
      grid-area: title
    }

  .item1 { background: orange; grid-area: body1 }

  .item2 {background: orangered; grid-area: body2 }

  .item3 {background: rgb(0, 217, 255); grid-area: body3 }

  .item4 {background: rgb(0, 255, 21); grid-area: body4 }

  .item5 {background: rgb(111, 0, 255); grid-area: body5 }

</style>