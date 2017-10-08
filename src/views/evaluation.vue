<template>
	<div class="view-evaluation">
		<div>
			<router-link :to="{ name: 'rubric', query: $route.query }">
				<pvd-button>back</pvd-button>
			</router-link>
		</div>
		<table>
			<tr>
				<th :score="inRange(rubricTotal, level.range.min, level.range.max)" v-for="(level, lIdx) in rubric.levels" :key="lIdx" :width="`${100 / rubric.levels.length}%`" :style="{ backgroundColor: level.color }">
					{{ level.name }}
				</th>
			</tr>
			<tr>
				<td :score="inRange(rubricTotal, level.range.min, level.range.max)" v-for="(level, lIdx) in rubric.levels" :key="lIdx">
					<ul>
						<template v-for="(desc, dIdx) in level.description">
							<hr v-if="dIdx" :key="dIdx">
							<li :key="dIdx">{{ desc }}</li>
						</template>
					</ul>
				</td>
			</tr>
		</table>
		<div class="learn-more">
			<router-link :to="{ name: 'about' }">
				<pvd-button>learn more about our project</pvd-button>
			</router-link>
		</div>
	</div>
</template>

<script>
import rubric from '../data/rubric.json';

export default {
 name: 'view-evaluation',

 data() {
	 return {
		 rubric
	 };
 },

 computed: {
	 rubricTotal() {
		 let sum = 0;
		 for (let k in this.$route.query) {
			 sum += Number.parseInt(this.$route.query[k]);
		 }
		 return sum;
	 }
 },

 methods: {
	 inRange(val, min, max) {
		 return (val >= min && val <= max);
	 }
 }
}
</script>

<style scoped>
table {
	table-layout: fixed;
	margin-top: 12px;
}

th {
	font-family: 'Titillium Web', 'Arial', sans-serif;
	font-weight: bold;
	font-size: 1.5em;
	text-transform: capitalize;
}

th, td {
	border: 1px solid black;
	vertical-align: middle;
	text-align: center;
	padding: 0.75em 0.75ch;
	z-index: 2;
}

td {
	font-size: 1.1em;
}

hr {
	border-style: solid;
	border-color: rgba(127, 127, 127, 0.25);
}

th:not([score]), td:not([score]) {
	opacity: 0.25;
}

.learn-more {
	margin-top: 16px;
	text-align: center;
}
</style>
