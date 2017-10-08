<template>
  <div class="view-rubric">
		<div class="rubric-group">
			<rubric-controls></rubric-controls>
			<pvd-rubric></pvd-rubric>
		</div>
  </div>
</template>

<script>
export default {
	name: 'view-rubric'
}
</script>

<style scoped>
.view-rubric {
	display: flex;
	flex-flow: column;
	align-items: center;
}

.rubric-group {
	max-width: 1280px;
}

.rubric-controls {
	margin: 12px 0;
	align-self: stretch;
}
</style>
