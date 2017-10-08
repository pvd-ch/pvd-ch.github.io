<template>
  <div class="pvd-app">
    <pvd-header :hide-logo="atHome" class="pvd-header"></pvd-header>
		<main>
			<div class="router-wrap">
				<transition appear mode="out-in" name="route">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>
			</div>
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
.pvd-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
}

main {
	height: 100vh;
	padding: 72px 16px 16px 16px;
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

.router-wrap {
	max-width: 1280px;
	margin: 0 auto;
}
</style>
