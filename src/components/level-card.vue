<template>
	<div :emphasize="selected" class="level-card">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<hr>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'level-card',

	data() {
		return {
			selected: false
		};
	}
}
</script>

<style scoped>
.level-card {
	padding: 16px;
	margin: 16px;
	border: 1px solid black;
	transition-property: opacity, transform, background-color;
	transition-duration: 0.25s;
	width: 24ch;
	background-color: black;
	color: white;
	border-radius: 5px;
}

.level-card[emphasize], .level-card-group[selectable]:hover > .level-card:hover {
	transform: translateZ(12px);
	border-style: solid;
	color: black;
	background-color: white;
}

ul {
	list-style: square;
	padding-left: 2ch;
}
</style>
