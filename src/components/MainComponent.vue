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
      objectPost: ''
    }
  },
  methods: {
    tumblrGet () {
      this.$http.get('http://api.tumblr.com/v2/blog/grrgrr.tumblr.com/posts/photo?api_key=' + this.client + '&limit=' + this.limit + '&offset=' + this.offset).then((response) => {
        console.log(response.data.response)
        this.objectBlog = response.blog
        this.msg = response.data.response.blog.title
        this.objectPost = response.data.response.posts
      })
    },
    blocks () {
      this.tumblrGet()
    }
  },
  mounted () {
    console.log('component ok pour le main et api tumblr')
    this.tumblrGet()
  }
}
</script>