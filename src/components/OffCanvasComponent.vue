<template>
  <div vblur="unfocused()">

    <a href="#" class="fh5co-menu-btn js-fh5co-menu-btn" @click='menuShow'>Menu <i class="icon-menu"></i></a>
    {{ retourIsActiveParent }}

    <div id="fh5co-offcanvass" v-bind:class="{ 'fh5co-awake': retourIsActiveParent }" >
      <a href="#" class="fh5co-offcanvass-close js-fh5co-offcanvass-close" @click='menuHide'>Menu <i class="icon-cross"></i></a>
      <h1 class="fh5co-logo title_tumblr"><a class="navbar-brand" href="index.html">Oups !</a></h1>
      {{ retourIsActiveParent }}
      <ul>
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="photos.html">Mes photos</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <h3 class="fh5co-lead">Connect with us</h3>
      <p class="fh5co-social-icons">
        <a href="https://twitter.com/GRRGRR"><i class="icon-twitter"></i></a>
        <!-- <a href="#"><i class="icon-flickr"></i></a> -->
        <a href="https://www.facebook.com/tukiffmonblaze"><i class="icon-facebook"></i></a>
        <a href="https://www.instagram.com/tukiffmonblaze/"><i class="icon-instagram"></i></a>
        <!-- <a href="#"><i class="icon-dribbble"></i></a>
        <a href="#"><i class="icon-youtube"></i></a> -->

      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'off-canvas',
  props: ['retourIsActiveParent'],
  data () {
    return {
      msg: 'ceci est le off canvas',
      isActive: this.retourIsActiveParent
    }
  },
  methods: {
    menuShowHyde () {
      if (this.retourIsActiveParent === false) {
        this.retourIsActiveParent = true
      } else { this.retourIsActiveParent = true }
    },
    menuShow () {
      this.isActive = true
      console.log('isActive', this.isActive)
    },
    menuHide () {
      this.isActive = false
      console.log('isActive', this.isActive)
    },
    unfocused () {
      alert('good bye')
    }
  },
  computed: {
    test () {
      return this.isActive
    }
  }
}
</script>
<style scoped>
  #fh5co-offcanvass.fh5co-awake {
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
    transform: translateX(0px);
  }
</style>