<template>
  <header id="fh5co-header" role="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <OffCanvasComponent v-on-clickaway="away"></OffCanvasComponent>
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
      msg: 'Ceci est le Header'
    }
  },
  methods: {
    away: function () {
      console.log('clicked away')
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
