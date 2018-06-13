<template>
	<div class="loading">
		<img :src="require('@/assets/images/loading.gif')" alt="">
	</div>
</template>

<script>
	export default {
		name:'Loading',
	}
</script>

<style scoped>
	img{
		width: 100%;
		margin: 100px auto;
	}
</style>
