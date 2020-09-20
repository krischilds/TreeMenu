<template>
  <div class="tree-menu">
    <div class="label-wrapper" @click="toggleChildren">
      <div :style="indent" :class="labelClasses">
        <i
          v-if="nodes"
          class="fa"
          :class="iconClasses"
          style="padding-right:10px"
        ></i>
        <span v-if="nodes">{{ label }}</span>
        <a href="#" v-else style="border:0">{{ label }}</a>
      </div>
    </div>
    <div v-if="showChildren">
      <tree-menu
        :key="node.label"
        v-for="node in nodes"
        :nodes="node.nodes"
        :label="node.label"
        :depth="depth + 1"
      >
      </tree-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: ["label", "nodes", "depth", "special"],
  name: "tree-menu",
  data() {
    return { showChildren: false };
  },
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 30}px)` };
    },
    iconClasses() {
      return {
        "fa-plus-square-o": !this.showChildren,
        "fa-minus-square-o": this.showChildren
      };
    },
    labelClasses() {
      return { "has-children": this.nodes };
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
};
</script>
<style lang="scss">
.tree-menu {
  text-align: left;
  margin: 10px;

  .label-wrapper {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 0px solid rgb(80, 169, 221);
    font-weight: normal;
    .has-children {
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>
