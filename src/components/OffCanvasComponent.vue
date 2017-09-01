<template>
<div>
  <a v-if="!isActive" href="#" class="co-menu-btn js-fh5co-menu-btn"  v-on:click="menuShow()" >Menu <i class="icon-menu"></i></a>
  <div id="fh5co-offcanvass">
    <a v-if="isActive" href="#"class="fh5co-offcanvass-close js-fh5co-offcanvass-close">Menu <i class="icon-cross"></i> </a>
    <h1 class="fh5co-logo title_tumblr"><a class="navbar-brand" href="index.html">Oups !</a></h1>
    {{ msg }}
    <ul>
      <li class="active"><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="photos.html">Mes photos</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <h3 class="fh5co-lead">Connect with us {{isActive}}</h3>
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
  data () {
    return {
      msg: 'ceci est le off canvas(layout)',
      isActive: false
    }
  },
  methods: {
    menuShow () {
      console.log('hello')
      this.isActive = true
    }
  },
  mounted () {
    console.log('isActive', this.isActive)
  }

}
</script>
