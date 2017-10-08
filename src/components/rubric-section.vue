<template>
	<div class="rubric-section">
		<div class="title">
			<slot name="title"></slot>
		</div>
		<div class="content">
			<div class="description">
				<slot name="description"></slot>
			</div>
			<level-card-group selectable>
				<slot></slot>
			</level-card-group>
		</div>
	</div>
</template>

<script>
export default {
	name: 'rubric-section'
}
</script>

<style scoped>
.rubric-section {
	display: flex;
	flex-flow: column;
}

.title {
	font-size: 2em;
	text-transform: capitalize;
	border-bottom: 2px solid black;
}

.content {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	justify-content: center;
}

.description {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5em;
	min-width: 16ch;
	flex-basis: 24ch;
	text-align: center;
}
</style>
