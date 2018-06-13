<template>
	<div class="detailsData">
		<loading v-if="!pd"></loading>
		<div class="item" v-if="pd">
			<h1>{{topics.title}}</h1>
			<ul class="changes">
				<li>
					发布于 : <span>{{timedata}}</span>
				</li>
				<li>
					作者 : <span>{{topics.author.loginname}}</span>
				</li>
				<li>
					<span>{{topics.visit_count}}</span> 次浏览
				</li>
			</ul>
			<div class="content" v-html="topics.content">
		
			</div>
			<div class="pinglun">
				<span>{{replies.length}}</span> 回复
			</div>
			<div class="comment">
				<ul>
					<li :key="index" v-for="(item, index) in replies">
						<img v-lazy="item.author.avatar_url">
						<div class="author-name">
							<p>
								<span>{{item.author.loginname}} </span> 
								<span>{{item.create_at}}</span>
							</p>
							
							<p v-html="item.content">
							
							</p>
						</div>
						<p class="zan">
							<i class="iconfont icon-zan"></i>
							{{item.ups.length}}
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	// 懒加载
	import Loading from "@/components/loading";
	// 获取数据js
	import {getTopicsList} from '@/getData/details.js';
	// 滚动加载
	import InfiniteLoading from 'vue-infinite-loading';
export default {
	name: 'detailsData',
	data(){
		return {
			// 接收主要数据
			topics: [],
			// 接收评论数据
			replies: [],
			// 数据获取成功前加载等待动画
			pd: false,
			// 时间格式接收
			timedata: ""
		}
	},
	components:{
		// 等待数据动画
		Loading,
		// 滚动加载
		InfiniteLoading
	},
	mounted() {
		// 接收get地址栏传输的id作为去参数查数据    查询的数据
		getTopicsList(this.$route.params.id).then((response) => {
			this.topics = response.data.data;
			this.replies = response.data.data.replies;
			// 判断数据获取数据成功
			this.pd = true;
			// 时间格式转换
			this.timedata = this.topics.create_at.split('T')[0];
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../../assets/css/reset.css";

	@import "../../assets/css/base.scss";


/* items */
	.item{
		width: rem(750px);
		margin: 0 auto;
		h1{
			padding: rem(5px);
			font-size: rem(50px);
			line-height: rem(60px);
		}
		.changes{
			li{
				padding: rem(10px);
			}
		}
	}
	.content{
		overflow: hidden;
		box-sizing: border-box;
		width: rem(750px);
		padding: rem(10px);
	}

.comment{
	width: rem(750px);
	margin: 0 auto;
	li{
		width: rem(750px);
		height: rem(220px);
		line-height: rem(100px);
		border-bottom: 1px solid #333;
		display: flex;
		justify-content: space-around;
		align-items: center;
		img{
			width: rem(70px);
			height: rem(70px);
			border-radius: rem(6px);
		}
		.author-name{
			width: rem(550px);
			height: rem(220px);
			overflow: hidden;
			p{
				span:nth-of-type(2){
					color: #369;
				}
			}
		}
	}
}
.pinglun{
	box-sizing: border-box;
	padding: 0 rem(10px);
	width: rem(750px);
	height: rem(70px);
	line-height: rem(70px);
	font-size: rem(25px);
	background: #f6f6f6;
}
</style>
