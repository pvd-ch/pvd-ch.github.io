<template>
  <header class="pvd-header">
		<router-link to="/" class="logo">Swiss PV Diffusion</router-link>
    <nav class="site-nav">
      <router-link to="/rubric" class="site-nav--link">self-assessment</router-link>
      <router-link to="/guidelines" class="site-nav--link">guidelines</router-link>
      <router-link to="/about" class="site-nav--link">our project</router-link>
    </nav>
		<div class="right-spacer"></div>
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
	display: flex;
	flex: 0 0 auto;
	justify-content: center;
	padding: 0 64px;
	transition: background-color 0.5s, box-shadow 0.5s;
}

.pvd-header:hover {
	background-color: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.logo {
	font-family: 'Lobster', 'Arial', sans-serif;
	font-size: 32px;
	align-self: center;
	flex: 1 0 0;
	opacity: 1;
	transition: opacity 0.5s, transform 0.25s;
}

.logo.router-link-exact-active {
	opacity: 0;
	pointer-events: none;
}

.right-spacer {
	flex-grow: 1;
}

.site-nav {
	display: flex;
	padding: 16px;
}

.site-nav--link {
	border-bottom: 2px dashed transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	padding: 0.25em 0.5em;
	text-transform: uppercase;
	transition: border-bottom-color 0.25s, transform 0.25s;
	min-width: 8ch;
	margin: 0 12px;
	font-family: 'Titillium Web', 'Arial', serif;
}

.site-nav--link.router-link-active {
	border-bottom-color: white;
	border-style: solid;
}

.site-nav--link:hover {
	transform: translateZ(6px);
	border-bottom-color: white;
}
</style>
