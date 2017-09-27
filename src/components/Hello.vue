<template>
  <div class="layout">
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from './FooterComponent.vue'
import HeaderComponent from './HeaderComponent.vue'
import MainComponent from './MainComponent.vue'

export default {
  name: 'layout',
  data () {
    return {
      msg: 'layout'
    }
  },
  components: {
    FooterComponent,
    HeaderComponent,
    MainComponent
  }
}
</script>

<!-- <template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button v-on:click="reDraw">redrawVueMasonry</button>
    <div v-masonry transition-duration=".3s" item-selector=".item" class="masonry-container">
      <div v-masonry-tile class="item" v-bind:key="index" v-for="(item, index) in blocks">
        <p>{{item.title}} - {{index}}</p>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
// import {VueMasonryPlugin} from '../../node_modules/vue-masonry/src/masonry.plugin'
import {VueMasonryPlugin} from 'vue-masonry'

Vue.use(VueMasonryPlugin)

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      blocks: [
        {
          title: 'nice block'
        },
        {
          title: 'another shiny block'
        },
        {
          title: 'the last block'
        }
      ]
    }
  },
  mounted: function () {
    this.$redrawVueMasonry()
  },
  methods: {
    reDraw: function () {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style scoped>

.item {
  border: 1px solid #ac0;
  width: 200px;
}
.masonry-container {
  width: 55%;
  margin: 0 auto;
}
</style> -->