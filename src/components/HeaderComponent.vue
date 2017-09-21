<template>
  <header id="fh5co-header" role="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <OffCanvasComponent :retourIsActiveParent='isActive' ></OffCanvasComponent>
          <a class="navbar-brand title_tumblr" href="index.html">Oups ! {{ msg }}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import OffCanvasComponent from './OffCanvasComponent.vue'

export default {

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
  computed: {
    reverseMessage () {
      return this.msg.split('').reverse().join('')
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
