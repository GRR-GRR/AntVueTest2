<template>
  <div id="fh5co-board" class="masonry-container" v-masonry fit-width="true"transition-duration="0.3s" item-selector=".item">
    <div v-for="(item, index) in objectPost">
      <div v-masonry-tile class="item" v-for="(photo, index) in item.photos" :key="index">
        <div class="animate-box animate-box bounceIn animated">
          <a :href="photo.original_size.url">
            <PhotoComponent class="image-popup fh5co-board-img" :src="photo.original_size.url" :imageUrl="photo.original_size.url" width="100%"></PhotoComponent>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PhotoComponent from './PhotoComponent.vue'
import {VueMasonryPlugin} from 'vue-masonry'
import Vue from 'vue'

Vue.use(VueMasonryPlugin)
const $ = require('jquery')
require('magnific-popup')

export default {
  components: {
    PhotoComponent
  },
  name: 'main',
  data () {
    return {
      msg: 'ceci est le main',
      client: 'hTqVY9D2OGTUQOYP7TzJYbXachJOqdyYfMJmI2SdhRdleQQ9qF',
      limit: 12,
      offset: 0,
      objectBlog: '',
      objectPost: [],
      selectedSize: 800,
      window: $(window)
    }
  },
  created () {
    console.log('ready')
  },
  methods: {
    tumblrGet () {
      this.$http.get('http://api.tumblr.com/v2/blog/grrgrr.tumblr.com/posts/photo?api_key=' + this.client + '&limit=' + this.limit + '&offset=' + this.offset).then((response) => {
        // console.log(response.data.response)
        this.objectBlog = response.blog
        this.msg = response.data.response.blog.title
        // this.objectPost = response.data.response.posts
        console.log(this.objectPost)
        this.objectPost = this.objectPost.concat(response.data.response.posts)
        this.popUp()
        Vue.nextTick(function () {
          this.$redrawVueMasonry()
        }.bind(this))
      })
    },
    infiniteScroll () {
      let self = this
      console.log(window.innerHeight, window.scrollY, $(document).height())
        // End of the document reached?
      if ($(document).height() - window.innerHeight === window.scrollY) {
        // $('#loading').show();
        self.offset += self.limit
        console.log(self.offset)
        // run ajax call and pass parameter from search
        self.tumblrGet()
        // salvattore.recreateColumns(document.getElementById('fh5co-board'))
      }
    },
    reDraw: function () {
      this.$redrawVueMasonry()
    },
    popUp () {
      $('#fh5co-board').magnificPopup({
        delegate: 'a',
        /*
        child items selector, by clicking on it popup will open
        */
        type: 'image',
        gallery: {
          /*
          options for gallery
          */
          enabled: true
        }
      })
    }
  },
  mounted () {
    console.log('component ok pour le main et api tumblr')
    // this.FlickrGet()
    this.tumblrGet()
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
      console.log('ça passe')
    }
    this.window.scroll(this.infiniteScroll)
  }
}
</script>
<style>
/*
 Spezific styling for salvattore
 Feel free to edit it as you like
 More info at http://salvattore.com
*/

/* Base styles */
.column {
    float: left;
}

@media screen and (max-width: 480px) {
  .column {
      float: none;
      position: relative;
      clear: both;
  }
}
.size-1of4 {
    width: 25%;
}
.size-1of3 {
    width: 33.333%;
}
.size-1of2 {
    width: 50%;
}
/*
#fh5co-board[data-columns]::before {
    content: '4 .column.size-1of4';
}*/


/* Configurate salvattore with media queries */
@media screen and (max-width: 480px) {
    #fh5co-board[data-columns]::before {
        content: '1 .column';
    }
    .item {
      width: 95%;
    }
}

@media screen and (min-width: 481px) and (max-width: 990px) {
/*    #fh5co-board[data-columns]::before {
        content: '2 .column.size-1of2';
    }*/
    .item {
      width: 47%;
    }
}

/*@media screen and (min-width: 701px) and (max-width: 990px) {
    #fh5co-board[data-columns]::before {
        content: '3 .column.size-1of3';
    }
    .item {
      width: 33.3%;
    }
}*/

@media screen and (min-width: 991px) {

    .item {
      width: 21.1%;
    }

}

.masonry-container {
    margin: 0 auto;
}
</style>