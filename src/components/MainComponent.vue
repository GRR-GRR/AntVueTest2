<template>
	<div id="fh5co-main">
		<div class="container">
			<div class="row">

				<div id="fh5co-board" class="grid" data-columns>
          <div v-for="(item, index) in objectPost">
            <PhotoComponent class="item" v-for="(photo, index) in item.photos" :imageLink="photo.original_size.url" :imageUrl="photo.original_size.url" :key="index"></PhotoComponent>

          </div>
        </div>
			</div>
    </div>
	</div>
</template>

<script>

import PhotoComponent from './PhotoComponent.vue'
import Vue from 'vue'

const salvattore = require('salvattore')
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
      window: $(window)
    }
  },
  created () {
    console.log('ready')
  },
  methods: {
    tumblrGet () {
      this.$http.get('http://api.tumblr.com/v2/blog/grrgrr.tumblr.com/posts/photo?api_key=' + this.client + '&limit=' + this.limit + '&offset=' + this.offset).then((response) => {
        console.log(response.data.response)
        this.objectBlog = response.blog
        this.msg = response.data.response.blog.title
        this.objectPost = this.objectPost.concat(response.data.response.posts)
        this.popUp()
        Vue.nextTick(function () {
          salvattore.recreateColumns(document.getElementById('fh5co-board'))
        })
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
    this.tumblrGet()
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

#fh5co-board[data-columns]::before {
    content: '4 .column.size-1of4';
}

/* Configurate salvattore with media queries */
@media screen and (max-width: 450px) {
    #fh5co-board[data-columns]::before {
        content: '1 .column';
    }
}

@media screen and (min-width: 451px) and (max-width: 700px) {
    #fh5co-board[data-columns]::before {
        content: '2 .column.size-1of2';
    }
}

@media screen and (min-width: 701px) and (max-width: 850px) {
    #fh5co-board[data-columns]::before {
        content: '3 .column.size-1of3';
    }
}

@media screen and (min-width: 851px) {
    #fh5co-board[data-columns]::before {
        content: '4 .column.size-1of4';
    }
}
</style>