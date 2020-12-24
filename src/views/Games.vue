<template>
  <div>
    <h3>Games</h3>

    <ul>
      <li :key="game.id" v-for="game in getGames">
        <Card>
          <template v-slot:header>
            {{ game.name }}
          </template>
          <template v-slot:body>
            <div>{{ game.rating }}</div>
          </template>
          <template v-slot="{ dogName }">
            {{ dogName }}
          </template>
          <template #footer>
            <h1>Footer</h1>
          </template>
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../components/General/Card";
//import Debug from "../components/General/Debug";

export default {
  name: "Games",
  components: { Card },
  computed: {
    getGames() {
      return this.$store.getters.getGames;
      //this.$store.commit("saveUsername", this.noteText);
    },
  },
};
</script>

<style>
</style>