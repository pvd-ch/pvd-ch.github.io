<template>
  <div class="view-rubric">
    <table>
			<thead>
				<th>Business Model Pillars</th>
				<th v-for="(level, idx) in rubric.levels" :key="idx">{{ level }}</th>
			</thead>
			<tr v-for="(pillar, pIdx) in rubric.pillars" :key="pIdx">
				<th>{{ pillar.name }}</th>
				<td v-for="(level, lIdx) in pillar.levels" :key="lIdx">
					<ul>
						<li v-for="(desc, dIdx) in level" :key="dIdx">{{ desc }}</li>
					</ul>
				</td>
			</tr>
		</table>
  </div>
</template>

<script>
import rubric from '../data/rubric.json';

export default {
	name: 'vue-rubric',

	data() {
		return {
			rubric
		};
	},
}
</script>

<style scoped>
table {
	cursor: default;
}

table, th, td {
	border: 1px solid white;
}

th, td {
	padding: 8px;
	transition: background-color 0.25s, transform 0.25s;
}

td {
	cursor: pointer;
}

td:hover {
	background-color: rgba(255, 255, 255, 0.1);
	transform: translateZ(6px);
}
</style>
