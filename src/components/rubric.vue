<template>
	<div class="pvd-rubric">
		<table class="rubric">
			<tr class="rubric-header">
				<th></th>
				<th v-for="(level, lIdx) in rubric.levels" :key="lIdx" class="rubric-header--level">
					{{ level.name }}
					<br>
					{{ level.value }}
				</th>
			</tr>
			<tr v-for="(pillar, pIdx) in rubric.pillars" :key="pIdx" class="rubric-row">
				<th class="rubric-row--header">{{ pillar.name }}</th>
				<td @click="handleClick(pIdx, rubric.levels[lIdx].value)" :selected="selected[pIdx] === rubric.levels[lIdx].value" v-for="(level, lIdx) in pillar.levels" :key="lIdx" class="rubric-row--description">
					<ul>
						<template v-for="(desc, dIdx) in level">
							<hr v-if="dIdx" :key="dIdx">
							<li :key="dIdx">{{ desc }}</li>
						</template>
					</ul>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import rubric from '../data/rubric.json';

export default {
	name: 'pvd-rubric',

	data() {
		return {
			rubric
		};
	},

	computed: {
		selected() {
			return this.$route.query;
		}
	},

	methods: {
		handleClick(pillar, level) {
			let newQuery = Object.assign({}, this.$route.query, { [pillar]: level });
			this.$router.push({ query: newQuery });
		}
	}
}
</script>

<style scoped>
.rubric-header, .rubric-row--header {
	text-transform: capitalize;
}

th {
	font-size: 1.5em;
}

th, td {
	border: 1px solid black;
	vertical-align: middle;
	text-align: center;
}

td {
	padding: 0.75em 0.75ch;
}

hr {
	border-style: solid;
	border-color: rgba(127, 127, 127, 0.25);
}

.rubric-row--description {
	transition-property: background-color, color, opacity, box-shadow;
	transition-duration: 0.25s;
}

.rubric-row--description:hover, .rubric-row--description[selected] {
	background-color: black;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
	color: white;
	transition-duration: 0.1s;
}

.rubric-row:hover .rubric-row--description:not(:hover) {
	opacity: 0.5;
}
</style>
