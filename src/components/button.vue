<template>
	<button class="pvd-button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'pvd-button'
}
</script>

<style scope>
.pvd-button {
	color: white;
	border: 2px solid black;
	outline: none;
	border-radius: 4px;
	font-size: 1.1em;
	background-color: black;
	text-transform: uppercase;
	padding: 0.25em 1ch;
	font-family: 'Titillium Web';
	transition: background-color 0.25s, color 0.25s, opacity 0.25s;
}

.pvd-button[disabled] {
	opacity: 0.25;
}

.pvd-button:not([disabled]):hover {
	background-color: white;
	color: black;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
</style>
