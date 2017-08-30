<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <footer id="fh5co-footer">
          <div class="container">
              <div class="row row-padded">
                  <div class="col-md-12 text-center">
                      <p class="fh5co-social-icons">
                          <a href="https://twitter.com/GRRGRR"><i class="icon-twitter"></i></a>
                          <!-- <a href="#"><i class="icon-flickr"></i></a> -->
                          <a href="https://www.facebook.com/tukiffmonblaze"><i class="icon-facebook"></i></a>
                          <a href="https://www.instagram.com/tukiffmonblaze/"><i class="icon-instagram"></i></a>
                          <!-- <a href="#"><i class="icon-dribbble"></i></a>
                          <a href="#"><i class="icon-youtube"></i></a> -->
                      </p>
                      <p><small>&copy; Hydrogen Free HTML5 Template. All Rights Reserved. <br>Designed by: <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> | Images by: <a href="http://pexels.com" target="_blank">Pexels</a> </small></p>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'ceci est le footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
