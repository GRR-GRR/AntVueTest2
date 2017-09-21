<template>
  <header id="fh5co-header" role="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <OffCanvasComponent v-on-clickaway="away" :retourIsActiveParent='isActive' ></OffCanvasComponent>
          <a class="navbar-brand title_tumblr" href="index.html">Oups ! {{ msg }}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import OffCanvasComponent from './OffCanvasComponent.vue'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [ clickaway ],
  components: {
    OffCanvasComponent
  },
  name: 'header',
  data () {
    return {
      msg: 'Ceci est le Header',
      isActive: false
    }
  },
  methods: {
    away: function () {
      this.isActive = false
      console.log('CLICK AWAY')
    }
  },
  computed: {
    reverseMessage () {
      return this.msg.split('').reverse().join('')
    }
  },
  watch: {

  },
  mounted () {
    console.log('mounted')
  }
}
</script>
