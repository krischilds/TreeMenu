<template>
    <div  >
        <CardLayout :items="getTattoos" :title="`Tattoos`" >
            <template scope="item">
                <div >              
                    <div>{{ item.name }}</div>
                    <div> {{ item.date }}</div>
                    <div>{{item.rating}}</div>
                </div>
            </template>
        </CardLayout>
    </div>
</template>

<script>
import CardLayout from "../components/General/CardLayout";
// import Debug from "../components/General/Debug";

export default {
  name: "Tattoos",
  components: { CardLayout },
  computed: {
    getTattoos() {
      return this.$store.getters.getTattoos;     
    },
  },
  mounted() {
    this.$store.dispatch("getTattoos");
  }

};
</script>

<style lang="scss">

.block {
  
  border: 2px solid gray;
  border-radius: 4px;
}

.grid-container {
  display: grid;
  list-style: none;
  grid-template: 
  'title title title'
  'body1 body1 body1' 
  'body2 body2 body3'
  'body2 body2 body4'
  'body5 body5 body5';
  grid-gap: 10px;
  padding: 10px;
  align-content: stretch;
}

.title {
    color: rgb(0, 218, 91);
    font-size: 1.5rem;
    grid-area: title
  }

.item1 { background: orange; grid-area: body1 }

.item2 {background: orangered; grid-area: body2 }

.item3 {background: rgb(0, 217, 255); grid-area: body3 }

.item4 {background: rgb(0, 255, 21); grid-area: body4 }

.item5 {background: rgb(111, 0, 255); grid-area: body5 }
</style>