<template>
	<div class="listData">
		<loading v-if="!topics.length"></loading>
		<div class="items" v-if="topics.length">
			<ul>
				<li :key="index" v-for="(item, index) in topics">
					<img v-lazy="item.author.avatar_url" alt="">
					<div class="tag" :class="{topbg:item.top}">
						<span v-if="item.top">置顶</span>
						<span v-else-if="item.good">精华</span>
						<span v-else>
							{{tab[item.tab]}}
						</span>
					</div>
					<p class="title">
						
						<router-link :to=" '/av/details/'+item.id ">{{item.title}}</router-link>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>


		
import Loading from "@/components/loading";

export default {
	name: 'listData',
	data () {
		return {
			tab:{
				good: '精华',
				weex: 'weex',
				share: '分享',
				ask: '问答',
				job: '招聘'
			}
		}
	},
	props:['topics'],
	components:{
		Loading
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../../assets/css/reset.css";

	@import "../../assets/css/base.scss";


/* items */
	.items{
		width: rem(750px);
		margin: 0 auto;
		li{
			width: rem(750px);
			height: rem(120px);
			border-bottom: 1px solid #333;
			display: flex;
			justify-content: space-around;
			align-items: center;
			img{
				width: rem(70px);
				height: rem(70px);
				border-radius: rem(6px);
			}
			.tag{
				width: rem(75px);
				height: rem(45px);
				border-radius: rem(7px);
				background: #e5e5e5;
				font-size: rem(26px);
				color: #333;
				text-align: center;
				line-height: rem(45px);
			}
			.title{
				font-size: rem(28px);
				width: rem(550px);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				a{
					font-size: rem(30px);
					line-height: rem(30px);
					color: #333;
					&:hover{
						color: #369;
						text-decoration: underline;
					}
				}
			}
			.topbg{
				background: #509030;
				color: #fff;
			}
		}
	}

</style>
