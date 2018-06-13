<template>
	<div class="APP">
		
		<div class="navTop">
			<div class="title">
				<h1>
					{{itemname}}
				</h1>
				<i class="iconfont icon-fanhui" @click="$router.history.go(-1)"></i>
				<i class="iconfont icon-xiaoxi"></i>
				<i class="iconfont icon-fangdajing"></i>
			</div>
			      <!-- Swiper -->
		    <div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide">
		                <router-link to="/av/">
							<span :class="resPath == 'allData'? 'xColor': ' '">全部</span>
		                </router-link>
		            </div>
					<div class="swiper-slide">
                    	<router-link to="/av/goodData">
                    		<span :class="resPath == 'goodData'? 'xColor': ' '">精华</span>
                    	</router-link>
	                </div>
	                <div class="swiper-slide">
	                    <router-link to="/av/weexData">
	                    	<span :class="resPath == 'weexData'? 'xColor': ' '">weex</span>
	                    </router-link>
	                </div>
	                <div class="swiper-slide">
	                    <router-link to="/av/shareData">
	                    	<span :class="resPath == 'shareData'? 'xColor': ' '">分享</span>
	                    </router-link>
	                </div>
	                <div class="swiper-slide">
	                    <router-link to="/av/askData">
	                    	<span :class="resPath == 'askData'? 'xColor': ' '">问答</span>
	                    </router-link>
	                </div>
	                <div class="swiper-slide">
	                    <router-link to="/av/jobData">
	                    	<span :class="resPath == 'jobData'? 'xColor': ' '">招聘</span>
	                    </router-link>
	                </div>
		            <div class="swiper-slide">
		                <router-link to="/movieData">电影</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">电视</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">音乐</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">小品</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">相声</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">小说</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">科技</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">游戏</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">线下</router-link>
		            </div>
		            <div class="swiper-slide">
		                <router-link to="/test">同城</router-link>
		            </div>
		        </div>
		    </div>
		</div>
		<div class="br">
			
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'av',
		data () {
			return {
				itemname: '影音'
			}
		},
		computed:{
			resPath:function (){
				var pathArr = this.$route.path.split('/');
				return pathArr[2];
			}
		},
		mounted() {
			var swiper = new Swiper('.swiper-container',{
				slidesPerView: 5.6
			});
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/css/reset.css";

	@import "../assets/css/base.scss";
	.navTop{
		background: #fff;
		position: fixed;
		top: 0;
		left: 50%;
		z-index: 99991;
		width: rem(750px);
		height: rem(180px);

    	transform: translateX(-50%);
    	.title{
    		position: relative;
    		width: 100%;
    		height: rem(100px);
			line-height: rem(100px);
			overflow: hidden;
			border-bottom: 1px solid #000;
			h1{
				position: absolute;
				top: rem(20px);
				left: 0;
				font-size: rem(45px);
				text-align: center;
				width: 100%;
			}
			.icon-fanhui{
				float: left;
			}
			i{
				float: right;
				font-size: rem(45px);
				margin: 0 rem(10px);
				color: green;
			}
    	}
		div{
			text-align: center;
			a{
				font-size: rem(30px);
				color: #333;
				line-height: rem(80px);

			}
		}
		.xColor{
			padding: 0 rem(5px);
			border-radius: rem(10px);
			background: #509030;
			color: #fff;
		}
		
	}
	.br{
		width: rem(750px);
		height: rem(180px);
	}
</style>