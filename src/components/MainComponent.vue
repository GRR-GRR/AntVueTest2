<template>
  <div id="fh5co-main">
    <div class="container">
			<div class="row">
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
      flickrApiLink: true,
      tumblrApiLink: false
    }
  },
  name: 'main',
  created () {
    console.log('ready')
  },
  methods: {
  }
}
</script>
<style scoped>
  #fh5co-main .container {
    padding-top: 10em;
  }
</style>
