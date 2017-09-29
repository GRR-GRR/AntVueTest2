<template>
  <div id="fh5co-main">
    <div class="container">
			<div class="row">
        <button @click='switchApi'>Changer d'api</button>
        <FlickrApiComponent v-if="flickrApiLink"/>
        <TumblrApiComponent v-if="tumblrApiLink"/>
      </div>
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
  data () {
    return {
      flickrApiLink: false,
      tumblrApiLink: true
    }
  },
  name: 'main',
  created () {
    console.log('ready')
  },
  methods: {
    switchApi () {
      if (this.flickrApiLink === true) {
        this.tumblrApiLink = true
        this.flickrApiLink = false
      } else {
        this.tumblrApiLink = false
        this.flickrApiLink = true
      }
    }

  }
}
</script>
<style scoped>
  #fh5co-main .container {
    padding-top: 10em;
  }
</style>
