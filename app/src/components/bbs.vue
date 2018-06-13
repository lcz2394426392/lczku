
<template>
	<div class="bbs">
		
		<div class="navTop">

			<div class="title">
				<h1>
				{{itemname}}
			</h1>
				<i class="iconfont icon-fanhui" @click="$router.history.go(-1)"></i>
				<i class="iconfont icon-xiaoxi"></i>
			</div>
			<p>
				论坛暂未开放!!!
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:'bbs',
		data () {
			return {
				itemname: '论坛'
			}
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
    	p{
    		font-size: rem(40px);
    		line-height: rem(50px);
    		width: rem(750px);
    		text-align: center;
    		margin: 0 auto;
    	}
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