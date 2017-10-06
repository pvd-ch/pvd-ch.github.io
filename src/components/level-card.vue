<template>
	<div class="level-card">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<hr>
		<slot name="content"></slot>
	</div>
</template>

<script>
export default {
	name: 'level-card'
}
</script>

<style scoped>
.level-card {
	padding: 16px;
	margin: 16px;
	border: 2px dashed white;
	transition-property: opacity, transform;
	transition-duration: 0.25s;
	width: 32ch;
}

.level-card[de-emphasize], .level-card-group[selectable]:hover > .level-card:not(:hover) {
	opacity: 0.5;
}

.level-card[emphasize], .level-card-group[selectable]:hover > .level-card:hover {
	transform: translateZ(8px);
	border-style: solid;
}
</style>
