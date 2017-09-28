<template>
  <div class="animate-box animate-box bounceIn animated">
    <a :href="imageLink" class="image-popup fh5co-board-img">
      <img :src="imageUrl">
    </a>
  </div>
</template>

<script>

export default {
  name: 'photo',
  props: ['imageUrl', 'imageLink'],
  mounted () {
    // console.log('image componet ok')
  }
}
</script>
<style scoped>

</style>