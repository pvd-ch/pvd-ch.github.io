<template>
  <div class="view-guidelines">
		<level-card-group selectable>
			<level-card v-for="(score, sIdx) in scores" :key="sIdx">
				<span slot="header">{{ score.name }}</span>
				<ul slot="content">
					<li v-for="(desc, dIdx) in score.description" :key="dIdx">{{ desc }}</li>
				</ul>
			</level-card>
		</level-card-group>
  </div>
</template>

<script>
import scores from '../data/scores.json';

export default {
	name: 'view-guidelines',

	data() {
		return {
			scores
		};
	}
}
</script>

<style scoped>
.view-guidelines {
	display: flex;
}
</style>
