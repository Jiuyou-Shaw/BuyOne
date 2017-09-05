<template>
  <div class="home">
    <header-bar></header-bar>
    <nav-bar></nav-bar>
    <slider></slider>
    <goods :home-goods = 'homeGoods'></goods>
    <shops></shops>
    
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import HeaderBar from '../../components/header.vue'
  import NavBar from '../../components/nav.vue'
  import Slider from './slider.vue'
  import Goods from './goods.vue'
  import Shops from './shops.vue'
  export default {
    computed: {
      ...mapState([
        'homeGoods'
      ])
    },
    mounted () {
      this.getHomeGoods()
    },
    methods: {
      ...mapActions([
        'getHomeGoods'
      ])
    },
    components: {
      HeaderBar,
      NavBar,
      Slider,
      Goods,
      Shops
    }
  }
</script>

<style>
  @import '../../assets/css/home/goods.css';

  .swiper-pagination .swiper-pagination-bullet{
		opacity: 1;
		background: #fff;
	}
	.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{
		background: #6c8 !important;
  }
  a:link{text-decoration:none;}
</style>
