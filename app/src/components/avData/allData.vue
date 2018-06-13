<template>
	<div class="allData">
		<list-data :topics="topics"></list-data>
		<infinite-loading @infinite="infiniteHandler">
			<span slot="no-more" class="more">
      			这已经是全部数据了
    		</span>
		</infinite-loading>
	</div>
</template>

<script>

import listData from "@/components/avData/listData";

import {getTopicsList} from '@/getData/index.js';

import InfiniteLoading from 'vue-infinite-loading';


export default {
	name: 'allData',
	data(){
		return {
			topics: [],
			page:1,
			loadLength: 1
		}
	},
	components:{
		listData,
		InfiniteLoading
	},
	mounted() {
		getTopicsList({limit:15,page:this.page}).then((response) => {
			this.topics = response.data.data;
		});
	},
	methods: {
		infiniteHandler($state) {
			setTimeout(() => {
				// 判断还有没有数据
				if (this.loadLength){
					getTopicsList({limit:8,page: ++(this.page)}).then((response) => {
						this.loadLength = response.data.data.length;
						this.topics = this.topics.concat(response.data.data);
					})
					$state.loaded();
				}else{
					$state.complete();
				}
				
			}, 1000);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
