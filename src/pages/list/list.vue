<template>
  <div class="list">
    <list-header></list-header>
		<list-nav></list-nav>
    <div class="list_options">
			<div class="options">
        <a href="#" class="active">总和排序 <i class="fa fa-arrow-down"></i></a>
        <a href="#">上架时间 <i class="fa fa-arrow-down"></i></a>
        <a href="#">价格 <i class="fa fa-arrow-down"></i></a>
        <a href="#">喜欢数 <i class="fa fa-arrow-down"></i></a>
      </div>
    </div>
    <div class="goods" v-infinite-scroll="getGoods" infinite-scroll-disabled="busy" infinite-scroll-distance="{num}">
      <ul>
        <li v-for="good in goods">
          <div class="g_item">
            <a :href="good.url + '/' + good.id">
              <img v-lazy="good.src" height="180" width="180" class="g_img">
            </a>
            <div class="g_detail">
              <h3 class="g_desc">
                <a :href="good.url">{{good.title}}</a>
              </h3>
              <div class="g_price">
                <span class="g_new_price">{{good.newPrice}}</span>
                <span class="g_old_price">{{good.oldPrice}}</span>
              </div>            
            </div>
          </div>
        </li>
      </ul>
      <loading v-show="isLoading"></loading>
			<none v-show="isOver"></none>
    </div>
  </div> 
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import ListHeader from './list_header.vue'
	import ListNav from './list_nav.vue'
	import Loading from '../../components/loading.vue'
  import None from '../../components/none.vue'

  export default {
    computed: {
      ...mapState([
        'goods',
        'busy',
        'isLoading',
        'isOver',
        'num'
      ])
    },
    methods: {
      ...mapActions([
        'getGoods'
      ])
    },
    components: {
			ListHeader,
			ListNav,
			Loading,
			None
		}
  }
</script>

<style scoped>
  @import '../../assets/css/home/goods.css';    
  .list_options {
		height: 40px;
		line-height: 40px;
		padding: 0 15px;
	}
	.list_options .options {
		width: 100%;
		display: flex;
		display: -webkit-box;
		flex-wrap:nowrap;
		justify-content: center;
	}
	.list_options .options a {
		display: block;
		flex: 1;		
		-webkit-box-flex: 1;
		text-align: center;
		color: #ccc;
	}
	.list_options .options a.active{
		color: #f66;
  }
</style>
