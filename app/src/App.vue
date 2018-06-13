<template>
	<div id="app">
		<router-view></router-view>
		<div class="br">
		</div>
		<nav class="footer">
			<ul>
				<router-link to="/" tag="li">
					<div :class="resPath == 'index'? 'xColor': ''">
						<i class="iconfont icon-shouye"></i>
						<p>首页</p>
					</div>
					
				</router-link>
				<router-link to="/av" tag="li">
					<div :class="resPath == 'av'? 'xColor': ''">
						<i class="iconfont icon-yingyinjiaocai"></i>
						<p>影音</p>
					</div>
					
				</router-link>
				<router-link to="/bbs" tag="li">
					<div :class="resPath == 'bbs'? 'xColor': ''">
						<i class="iconfont icon-luntan"></i>
						<p>论坛</p>
					</div>
					
				</router-link>
				<router-link to="/we" tag="li">
					<div :class="resPath == 'we'? 'xColor': ''">
						<i class="iconfont icon-guanyuwomen"></i>
						<p>关于我们</p>
					</div>
					
				</router-link>
			</ul>
		</nav>

	</div>
</template>

<script>
export default {
	name: 'App',
	computed: {
		resPath: function (){
			var pathArr = this.$route.path.split('/');
			return pathArr[1];
		}
	}
}
</script>

<style lang="scss">

	@import "./assets/css/reset.css";

	@import "./assets/css/base.scss";

	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: rem(90px);
		font-size: rem(26px);
		background: #000;
		ul{
			display: flex;
			justify-content: space-around;
			li{
				text-align: center;
				color: #fff;
				i{
					font-size: rem(40px);
					line-height: rem(50px);
				}
				p{
					line-height: rem(40px);
					text-align: center;
				}
			}
			.xColor{
				color: red;
			}
		}
	}
	.br{
		width: rem(750px);
		height: rem(90px);
	}
	.more{
		font-size: rem(30px);
	}

	.prettyprint{
		box-sizing: border-box;
		width: rem(750px);
		code{
			box-sizing: border-box;
			width: 100%;
		}
	}
	h1{
		font-size: rem(40px);
		line-height: rem(50px);
	}
	.markdown-text{
		p{
			font-size: rem(32px);
			line-height: rem(40px);
			width: 100%;
			img{
				width: 100%;
			}
		}
	}
</style>
