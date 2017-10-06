<template>
	<div class="rubric-section">
		<div>
			<slot name="title"></slot>
		</div>
		<hr>
		<div class="main">
			<slot name="aside"></slot>
			<slot name="content" class="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'rubric-section'
}
</script>

<style scoped>
.main {
	display: flex;
	justify-content: space-between;
}

.content {
	flex-grow: 1;
}
</style>
