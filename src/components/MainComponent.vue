<template>
  <div id="fh5co-main">
    <div class="container">
			<div class="row">
        <FlickrApiComponent></FlickrApiComponent>
<!--         <TumblrApiComponent></TumblrApiComponent>
 -->      </div>
    </div>
	</div>
</template>

<script>

import TumblrApiComponent from './TumblrApiComponent'
import FlickrApiComponent from './FlickrApiComponent'

export default {
  components: {
    TumblrApiComponent,
    FlickrApiComponent
  },
  name: 'main',
  data () {
    return {
    }
  },
  created () {
    console.log('ready')
  },
  methods: {

  },
  mounted () {
    console.log('component ok pour le main et api tumblr')
    // this.FlickrGet()
  }
}
</script>