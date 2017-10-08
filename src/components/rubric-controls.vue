<template>
	<div class="rubric-controls">
		<router-link :to="{ query: undefined }">
			<pvd-button :disabled="rubricEmpty">clear</pvd-button>
		</router-link>
		<router-link :to="{ name: 'evaluation', query: $route.query }">
			<pvd-button :disabled="!rubricReady">evaluate</pvd-button>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'rubric-controls',

	computed: {
		rubricEmpty() {
			return Object.keys(this.$route.query).length === 0;
		},
		rubricReady() {
			return Object.keys(this.$route.query).length === 4;
		}
	}
}
</script>

<style scoped>
.rubric-controls > *:last-child {
	float: right;
}
</style>
