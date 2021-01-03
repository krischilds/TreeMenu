<template>
    <div>
      <section class="page-title-section">
        <div class="page-title" :class="{ 'page-title-sticky': (scrollPosition > 20) }"  >{{ pageTitle }}</div>
      </section>
      <div class="page-layout__3-cols">        
          <nav class="nav-1"></nav>
          <CardLayout :items="getTattoos" :title="`Tattoos`" :page="`tattoos`">
              <template scope="item">
                  <div>              
                      <div>{{ item.name }}</div>
                      <div> {{ item.date }}</div>
                      <div>{{item.rating}}</div>
                  </div>
              </template>
          </CardLayout>
          <div class="nav-2">
            <div id="sticky"><button :class="{ 'fixed-button': isFixed }">Show Message</button></div>
          </div>
      </div>
    </div>
</template>

<script>
import CardLayout from "../components/General/CardLayout";
// import Debug from "../components/General/Debug";

export default {
  name: "Tattoos",
  components: { CardLayout },
  props: { 
    pageTitle: {
      type: String,
      default: "Tattoos"
    } 
  },
  data() {
    return {
      windowHeight: 0,
      scrollPosition: 0
    }
  },
  computed: {
    getTattoos() {
      return this.$store.getters.getTattoos;     
    },
    isFixed() {
      return this.scrollPosition > 0
    }
  },
  watch: {
    scrollPosition: function (val) {
      if (val > 20) {
        console.log("WATCH: " + val);
      }
    },
  },
  methods: {  
    onResize() {
      this.windowHeight = window.innerHeight
    },
    updateScroll() {
      this.scrollPosition = window.scrollY      
    }

  },
  mounted() {
    this.$store.dispatch("getTattoos");
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('scroll', this.updateScroll);
    });
    
  },
  beforeDestroy() {     
    window.removeEventListener('resize', this.onResize); 
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="scss">

  .fixed-button {
    position: fixed;
    bottom: 40px; 
    right: 20px;
    background: rgb(6, 103, 168); color: white;
  }

  .page-title-section {
    border: 2px solid rgb(255, 199, 14);
  }

  .page-title {
    font-size: 1rem;
    font-weight: bold;
    color: darkorange;
  }

  .page-title-sticky {
    position: fixed;
    left: 20px;
    top: 20px;    
    background: lightblue; 
    color: darkcyan;
  }

  .page-layout__3-cols {
    display: flex;
    justify-content: space-between;
    
    .nav-1, .nav-2 {
      flex: 1;
      padding: 10px;
    }

    .grid-container  {
        flex: 4;
    }
  }

  .block {    
    border: 2px solid gray;    
    border-radius: 4px;
    min-height: 400px;
  }

  .grid-container.tattoos {
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
      color: rgb(3, 123, 153);
      font-size: 1.5rem;
      grid-area: title
    }

  .item1 {background: orange; grid-area: body1 }
  .item2 {background: orangered; grid-area: body2 }
  .item3 {background: rgb(0, 217, 255); grid-area: body3 }
  .item4 {background: rgb(0, 255, 21); grid-area: body4 }
  .item5 {background: rgb(111, 0, 255); grid-area: body5 }
  
</style>