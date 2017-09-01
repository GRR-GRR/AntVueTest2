<template>
  <div class="hello">
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
                        <p><small>{{ msg }}. All Rights Reserved. <br>Designed by: <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a> | Images by: <a href="http://pexels.com" target="_blank">Pexels</a> </small></p>
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
      msg: 'Ceci est le footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
