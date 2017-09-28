<template>
  <div v-on-clickaway="menuHide">

    <a href="#" class="fh5co-menu-btn js-fh5co-menu-btn" @click='menuShowHyde'>Menu <i class="icon-menu"></i></a>

    <div id="fh5co-offcanvass" v-bind:class="{ 'fh5co-awake': isActive }" >
      <a href="#" class="fh5co-offcanvass-close js-fh5co-offcanvass-close" @click='menuHide'>Menu <i class="icon-cross"></i></a>
      <h1 class="fh5co-logo title_tumblr"><a class="navbar-brand" href="index.html">Oups !</a></h1>
      <ul>
        <li class="active"><a href="index.html">Home</a></li>
        <li><a @click="tumblrApiLink">About</a></li>
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
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'off-canvas',
  mixins: [ clickaway ],
  props: ['retourIsActiveParent'],
  data () {
    return {
      msg: 'ceci est le off canvas',
      isActive: this.retourIsActiveParent
    }
  },
  methods: {
    menuShowHyde () {
      if (this.isActive === false) {
        this.isActive = true
      } else { this.isActive = false }
    },
    menuShow () {
      this.isActive = true
      console.log('isActive', this.isActive)
    },
    menuHide () {
      this.isActive = false
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