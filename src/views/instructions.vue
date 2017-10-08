<template>
  <div class="view-instructions">
		<div>
			In order to best understand the state of your utility, you will fill out a short rubric. This rubric is broken into four distinct sections: core strategies, innovation & flexibility, customer interface, and revenue model. The scores correspond to the adaptiveness and survivability of the utility in the changing landscape of the Swiss energy sector. Below you can find the definitions of the business model pillars used for creating the rubric.
		</div>
		<table>
			<tr>
				<th :width="`${100 / pillars.length}%`" v-for="(pillar, pIdx) in pillars" :key="pIdx">{{ pillar.name }}</th>
			</tr>
			<tr>
				<td v-for="(pillar, pIdx) in pillars" :key="pIdx">
					<ul>
						<template v-for="(desc, dIdx) in pillar.description">
							<hr v-if="dIdx" :key="dIdx">
							<li :key="dIdx">{{ desc }}</li>
						</template>
					</ul>
				</td>
			</tr>
		</table>
		<router-link :to="{ name: 'rubric' }">
			<pvd-button>take the self-assesment</pvd-button>
		</router-link>
  </div>
</template>

<script>
import { pillars } from '../data/rubric.json';

export default {
	name: 'view-instructions',

	data() {
		return {
			pillars
		};
	}
}
</script>

<style scoped>
.view-instructions {
	text-align: center;
}

table {
	table-layout: fixed;
	max-width: 960px;
	margin: 16px auto;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
	border-collapse: separate;
}

th {
	font-family: 'Titillium Web', 'Arial', sans-serif;
	font-weight: bold;
	font-size: 1.5em;
	text-transform: capitalize;
	background-color: black;
	color: white;
	border: 1px solid white;
}

th, td {
	vertical-align: middle;
	text-align: center;
	padding: 0.75em 0.75ch;
	z-index: 2;
}

td {
	font-size: 1.1em;
	border: 1px solid black;
}

hr {
	border-style: solid;
	border-color: rgba(127, 127, 127, 0.25);
}
</style>
