<template>
	<div id="fh5co-main">
		<div class="container">
			<div class="row">
				<div id="fh5co-board" class="grid" data-columns>
          		{{ msg }}
				</div>
			</div>
       </div>
	</div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Ceci est le main'
    }
  }
}
</script>

