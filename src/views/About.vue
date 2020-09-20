<template>
  <div>
    <h5>Tree Menu</h5>

    <div id="app">
      <div class="tree-menu-container">
        <select v-model="selected" @change="selectTree">
          <option
            :key="option.value"
            v-for="option in options"
            v-bind:value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
        <tree-menu-root v-if="tree" :tree="tree" />
      </div>
    </div>
  </div>
</template>

<script>
import TreeMenuRoot from "../components/TreeMenuRoot.vue";

export default {
  components: { "tree-menu-root": TreeMenuRoot },
  data() {
    return {
      tree: {},
      treeMap: {},
      selected: "A",
      options: [
        { text: "Pesticides", value: "A" },
        { text: "Vet Drugs", value: "B" },
        { text: "Resource Center", value: "C" }
      ]
    };
  },
  watch: {
    selected: function(val) {
      this.tree = this.treeMap[val];
    }
  },
  created() {
    const t1 = {
      label: "Tree 1 Root",
      nodes: [
        {
          label: "Module 1",
          nodes: [
            {
              label: "item1.1"
            },
            {
              label: "item1.2",
              nodes: [
                {
                  label: "item1.2.1"
                }
              ]
            }
          ]
        },
        {
          label: "item2"
        }
      ]
    };
    const t2 = {
      label: "Tree 2 Root",
      nodes: [
        {
          node: { type: "like", label: "Super Node 2" },
          label: "Module 2",
          nodes: [
            {
              label: "item2.1"
            },
            {
              label: "item2.2",
              nodes: [
                {
                  label: "item2.2.1"
                }
              ]
            }
          ]
        },
        {
          label: "item2"
        }
      ]
    };
    const t3 = {
      label: "Tree 3 Root",
      nodes: [
        {
          node: { type: "link", label: "Super Node 3" },
          label: "Module 3",
          nodes: [
            {
              label: "item3.1"
            },
            {
              label: "item3.2",
              nodes: [
                {
                  label: "item3.2.1"
                }
              ]
            }
          ]
        },
        {
          label: "item3"
        }
      ]
    };
    let treeMap = {};
    treeMap.A = t1;
    treeMap.B = t2;
    treeMap.C = t3;

    this.treeMap = treeMap;
    this.tree = this.treeMap[this.selected];
  }
};
</script>

<style lang="scss" scoped>
.tree-menu-container {
  background: #7cc4ff;
  color: darkblue;
  min-width: 240px;
  min-height: 300px;
  border: 1px solid blue;
  select {
    border: 0;
    background: #2196f3;
    font-size: 18px;
    color: white;
    padding: 10px;
    width: 100%;
    text-align: left;
  }
}
</style>
