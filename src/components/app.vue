<template>
  <div class="pvd-app">
    <pvd-header :hide-logo="atHome"></pvd-header>
		<main>
			<transition appear mode="out-in" name="route">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</main>
  </div>
</template>

<script>
export default {
	name: 'pvd-app',

	computed: {
		atHome() {
			return (this.$route.name === 'home');
		}
	}
}
</script>

<style scoped>
.pvd-app {
	display: flex;
	flex-direction: column;
}

main {
	margin: 16px;
	overflow-y: auto;
	flex-grow: 1;
}

.route-enter-active, .route-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.route-enter {
  transform: translateZ(16px);
  opacity: 0;
}

.route-leave-to {
	transform: translateZ(-16px);
	opacity: 0;
}
</style>
