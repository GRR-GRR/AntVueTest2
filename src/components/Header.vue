<template>
  <div>
    <h1>{{ msg }}</h1>
		<header id="fh5co-header" role="banner">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<a href="#" class="fh5co-menu-btn js-fh5co-menu-btn">Menu <i class="icon-menu"></i></a>
						<a class="navbar-brand title_tumblr" href="index.html">Oups !</a>
					</div>
				</div>
			</div>
		</header>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'ceci est le header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
