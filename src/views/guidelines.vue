<template>
  <div class="view-guidelines">
    <table>
			<thead>
				<th v-for="(s, idx) in score" :key="idx">{{ s.name }}</th>
			</thead>
			<tr>
				<td v-for="(s, idx) in score" :key="idx">
					<ul>
						<li v-for="(d, dIdx) in s.description" :key="dIdx">{{ d }}</li>
					</ul>
				</td>
			</tr>
		</table>
  </div>
</template>

<script>
import score from '../data/score.json';

export default {
	name: 'view-guidelines',

	data() {
		return {
			score
		};
	}
}
</script>

<style scoped>

</style>
