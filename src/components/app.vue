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
	flex-grow: 1;
	padding: 16px;
	overflow: auto;
}

.route-enter-active, .route-leave-active {
  transition: opacity 0.125s, transform 0.125s;
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
