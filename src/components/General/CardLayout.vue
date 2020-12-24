<template>
<div>

    <ul class="grid-container">
      <li class="title">{{ title }}</li>
      <li class="block" v-for="item in items" :key="item.id" :class="item.abbr">    
        <slot v-bind="item">{{item.name}}</slot>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "CardLayout",
  props: [ 'title', 'items' ],
};
</script>


