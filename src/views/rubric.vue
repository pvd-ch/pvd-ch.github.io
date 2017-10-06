<template>
  <div class="view-rubric">
		<rubric-section v-for="(pillar, pIdx) in rubric.pillars" :key="pIdx">
			<span slot="title">{{ pillar.name }}</span>
			<ul slot="aside">
				<li v-for="(pDesc, pdIdx) in pillar.description" :key="pdIdx">{{ pDesc }}</li>
			</ul>
			<level-card-group selectable slot="content">
				<level-card v-for="(level, lIdx) in pillar.levels" :key="lIdx">
					<span slot="header">{{ rubric.levels[lIdx] }}</span>
					<ul slot="content">
						<li v-for="(desc, dIdx) in level" :key="dIdx">{{ desc }}</li>
					</ul>
				</level-card>
			</level-card-group>
		</rubric-section>
  </div>
</template>

<script>
import rubric from '../data/rubric.json';

export default {
	name: 'view-rubric',

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

th {
	text-transform: capitalize;
}

th, td {
	padding: 8px;
	transition: background-color 0.25s, transform 0.25s;
	box-shadow: inset 0 0 6px black;
}

td {
	cursor: pointer;
}

td:hover {
	background-color: rgba(255, 255, 255, 0.1);
	transform: translateZ(6px);
	box-shadow: none;
}
</style>
