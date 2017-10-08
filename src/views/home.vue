<template>
  <div class="view-home">
		<div class="title">
			<span class="title--upper">Swiss</span>
			<br>
			<span class="title--lower">PV Diffusion</span>
		</div>
		<div>
			<router-link to="/">
				<pvd-button>take the self-assesment</pvd-button>
			</router-link>
			<router-link to="/">
				<pvd-button>explore our project</pvd-button>
			</router-link>
		</div>
  </div>
</template>

<script>
export default {
	name: 'view-home'
}
</script>

<style scoped>

.view-home {
	text-align: center;
}

.title {
	font-family: 'Lobster', sans-serif;
	margin-bottom: 64px;
}

.title--upper {
	font-size: 192px;
}

.title--lower {
	font-size: 144px;
}
</style>
