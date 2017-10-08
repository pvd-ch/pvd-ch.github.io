<template>
	<div class="rubric-controls">
		<button @click="clearRubric" :disabled="rubricEmpty">clear</button>
		<button @click="evalRubric" :disabled="!rubricReady">evaluate</button>
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
	},

	methods: {
		clearRubric() {
			this.$router.push({ query: null });
		},
		evalRubric() {
			this.$router.push({ name: 'guidelines', query: this.$route.query });
		}
	}
}
</script>

<style scoped>
.rubric-controls {
	display: flex;
	justify-content: space-between;
}

button {
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

button[disabled] {
	opacity: 0.25;
}

button:not([disabled]):hover {
	background-color: white;
	color: black;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
</style>
