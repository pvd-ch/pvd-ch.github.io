<template>
	<div :selectable="selectable" class="level-card-group">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'level-card-group',

	props: {
		selectable: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>
.level-card-group {
	display: flex;
}
</style>
