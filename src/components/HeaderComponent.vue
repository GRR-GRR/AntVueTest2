<template>
  <header id="fh5co-header" role="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- <a href="#" class="fh5co-menu-btn js-fh5co-menu-btn"  v-on:click="menuShow()" >Menu <i class="icon-menu"></i></a> -->
          <a class="navbar-brand title_tumblr" href="index.html">Oups ! {{ msg }}</a>
          <a class="navbar-brand title_tumblr" href="index.html">Oups ! </a>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Ceci est le Header'
    }
  },
  computed: {
    reverseMessage () {
      return this.msg.split('').reverse().join('')
    }
  },
  watch: {

  },
  methods: {
    menuShow () {
    // TypeScript knows that `this` is of type MyComponent
    // and that `this.message` will be a string
      console.log('ça marche')
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
