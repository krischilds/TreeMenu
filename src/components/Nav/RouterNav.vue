<template>
  <div>
    <ul>
      <li v-for="(r, i) in routes" :key="`route${i}`">
        <div style="padding-right:10px" v-if="i > 0">|</div>
        <router-link :to="r.path">{{ r.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "../../router";

export default {
  name: "RouterNav",
  props: {},
  data() {
    return {
      routes: null
    };
  },
  mounted() {
    this.routes = routes;
    console.log(this.routes);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-flex;
  margin: 0 6px;
}
a {
  color: #42b983;
}
</style>
