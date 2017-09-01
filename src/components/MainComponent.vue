<template>
	<div id="fh5co-main">
		<div class="container">
			<div class="row">
				<div id="fh5co-board" class="grid" data-columns>
					<!-- script append here -->
          {{ msg }}
				</div>
			</div>
       </div>
	</div>

	<!-- <p id="loading"><img src="images/loading.gif" alt="Loading…" /></p> -->
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

