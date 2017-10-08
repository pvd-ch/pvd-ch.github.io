<template>
	<div class="view-evaluation">
		{{ rubricTotal }}
	</div>
</template>

<script>
export default {
 name: 'view-evaluation',

 computed: {
	 rubricTotal() {
		 let sum = 0;
		 for (let k in this.$route.query) {
			 sum += this.$route.query[k];
		 }
		 return sum;
	 }
 }
}
</script>

<style scoped>

</style>
