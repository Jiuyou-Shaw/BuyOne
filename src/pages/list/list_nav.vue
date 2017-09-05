<template>
	<div class="list_nav">
		<ul>
			<li class="cur"><a href="#">全部</a></li>
			<li><a href="#">夹克</a></li>
			<li><a href="#">工装</a></li>
			<li><a href="#">裙装</a></li>
			<li><a href="#">休闲裤</a></li>
			<li><a href="#">连衣裙</a></li>
			<li><a href="#">婚纱</a></li>
			<li><a href="#">牛仔裤</a></li>
			<li><a href="#">短袖</a></li>
			<li><a href="#">T恤</a></li>
			<li><a href="#">衬衫</a></li>
		</ul>
	</div>
</template>

<style scoped>
	.list_nav{
		height: 40px;
		overflow: hidden;
		background-color: #6c8;
	}
	.list_nav ul{
		width: auto;
		height: 40px;
		white-space: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
  }
  .list_nav ul::-webkit-scrollbar {
    display: none;
  }
	.list_nav li{
		display: inline-block;
		padding: 0 15px;
		line-height: 40px;
  }
  .list_nav li.cur {
    background: #69a;
  }
	.list_nav ul li.cur a{
		color: #fff;
	}
	.list_nav ul li a{
		color: #333;
		font-size: 14px;
	}
</style>