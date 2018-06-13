<template>
	<div class="index">
		<div class="header">
			<div class="inp">
				<i class="iconfont icon-fangdajing"></i>
				<p>
					影视 图书 唱片 小组 舞台剧
				</p>
			</div>
			<i class="iconfont icon-xiaoxi">
				
			</i>
		</div>		
		<div class="br">
			
		</div>
		<div class="play">
			<div class="swiper-container1">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="../assets/images/play1.jpg" alt="">
					</div>
					<div class="swiper-slide">
						<img src="../assets/images/play2.jpg" alt="">
					</div>
					<div class="swiper-slide">
						<img src="../assets/images/play3.jpg" alt="">
					</div>
					<div class="swiper-slide">
						<img src="../assets/images/play5.jpg" alt="">
					</div>
					<div class="swiper-slide">
						<img src="../assets/images/play6.jpg" alt="">
					</div>
				</div>
				   
   	 			<div class="swiper-scrollbar"></div>
			</div>
		</div>
		<list-data :topics="topics"></list-data>
		<div class="copyright">
			<h1>李承志</h1>
			<time datetime="2018-05-16">May 16th, 2018</time>
		</div>
	</div>
</template>

<script>

import listData from "@/components/avData/listData";
import {getTopicsList} from '@/getData/index.js';
export default {
	name: 'index',
	data () {
		return {
			topics: []
		}
	},
	components:{
		listData
	},
	mounted() {
		var swiper1 = new Swiper('.swiper-container1', {
			scrollbar: {
				el: '.swiper-scrollbar',
				hide: true,
			},
		});
		getTopicsList({limit:10}).then((response) => {
			this.topics = response.data.data;
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

	@import "../assets/css/reset.css";

	@import "../assets/css/base.scss";



/* header */
.header{
	position: fixed;
	left: 50%;
	top: 0;
	z-index: 10001;
	transform: translateX(-50%);
	width: rem(750px);
	height: rem(90px);
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #4da669;
	.inp{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: rem(550px);
		height: rem(60px);
		font-size: rem(30px);
		color: #dcdcdc;
		background: #fff;
		border-radius: rem(10px);
		i{
			margin: 0 rem(20px);
			font-size: rem(30px);
		}
	}
	>i{
		width: rem(80px);
		font-size: rem(45px);
		text-align: center;
		color: #fff;
	}
}
.br{
	margin: 0 auto;
	width: rem(750px);
	height: rem(90px);
}
/* 幻灯片 */

.play{
	position: relative;
	margin: 0 auto;
	width: rem(750px);
	overflow: hidden;
	.swiper-scrollbar{
		z-index: 10;
	}
	img{
		width: 100%
	}
}

/* 幻灯片END */


.copyright{
	h1{
		font-size: rem(30px);
	}
	time{
		font-size: rem(26px);
	}
	padding-right: rem(20px);
	line-height: rem(40px);
	text-align: right;
}


</style>
