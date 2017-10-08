<template>
  <header class="pvd-header">
		<router-link :to="{ name: 'home' }" class="logo">Swiss PV Diffusion</router-link>
    <nav class="site-nav">
      <router-link :to="{ name: 'instructions' }" class="site-nav--link">instructions</router-link>
      <router-link :to="{ name: 'rubric' }" class="site-nav--link">self-assessment</router-link>
      <router-link :to="{ name: 'about' }" class="site-nav--link">our project</router-link>
    </nav>
  </header>
</template>

<script>
export default {
	name: 'pvd-header',

	props: {
		hideLogo: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped>
.pvd-header {
	background-image: linear-gradient(to right, #434343 0%, black 100%);
	box-shadow: 0 0 16px black;
	color: white;
	height: 56px;
	padding: 0 64px;
}

.logo {
	align-self: center;
	float: left;
	font-family: 'Lobster', 'Arial', sans-serif;
	font-size: 32px;
	line-height: 56px;
	opacity: 1;
	transition: opacity 0.5s;
}

.logo.router-link-exact-active {
	opacity: 0;
	pointer-events: none;
}

.site-nav {
	float: right;
	height: 100%;
}

.site-nav--link {
	align-items: center;
	border-bottom: 0.15em dashed transparent;
	border-top: 0.15em dashed transparent;
	display: inline-block;
	font-family: 'Titillium Web', 'Arial', serif;
	font-size: 1.5em;
	height: 100%;
	justify-content: center;
	margin: 0 0.5em;
	padding: 0.5em 0.5em;
	text-transform: uppercase;
	transition: border-bottom-color 0.25s;
}

.site-nav--link:hover {
	border-bottom-color: white;
}

.site-nav--link.router-link-active {
	border-bottom-color: white;
	border-bottom-style: solid;
}
</style>
