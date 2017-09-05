<template>
  <div class="home_shops" v-infinite-scroll="getHomeShops" infinite-scroll-disabled="busy" infinite-scroll-distance="{num}">
    <div class="shop_item" v-for="shop in homeShops">
      <div class="shop_info">
        <h3>
          <a href="" class="shop_icon"><img :src="shop.icon"></a>
          <a href="" class="shop_name">{{shop.name}}</a>
        </h3>
        <p class="shop_desc">{{shop.intrduction}}</p>
      </div>
      <div class="shop_goods">
        <ul>
          <li v-for="good in shop.goods" class="shop_good_item">
            <a :href="good.url + '/' + good.id" class="good_img">
              <img v-lazy="good.src" width="180" height="180">
            </a>
            <div class="good_detail">
              <h4 class="good_desc">
                <a :href="good.url + '/' + good.id">{{good.title}}</a>
              </h4>
              <p class="good_price">
                <span class="good_new_price">{{good.newPrice}}</span>
                <span class="good_old_price">{{good.oldPrice}}</span>
              </p>
            </div>
          </li>
        </ul>
        <p class="shop_entry">
          <a :href="shop.url">进入店铺>></a>
        </p>
      </div>
    </div>  
    <loading v-show="isLoading"></loading>
    <none v-show="isOver"></none>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loading from '../../components/loading.vue'
import None from '../../components/none.vue'

export default {
  computed: {
    ...mapState([
      'homeShops',
      'busy',
      'isLoading',
      'isOver'
    ])
  },
  methods: {
    ...mapActions([
      'getHomeShops'
    ])
  },
  components: {
    Loading,
    None
  }
}
</script>

<style scoped>
  .shop_item {
    margin: 10px;
    -webkit-box-shadow:0 0 1px rgba(0, 0, 0, .1);  
		-moz-box-shadow:0 0 1px rgba(0, 0, 0, .1);  
		box-shadow:0 0 1px rgba(0, 0, 0, .5); 
  }
  .shop_info .shop_icon {
    float: left;
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
  .shop_icon img {
    width: 100%;
    height: 100%;
  }
  .shop_info .shop_name {
    line-height: 30px;
    font-size: 14px;
    color: goldenrod;
    font-weight: 700;
  }
  .shop_info .shop_desc {
    padding: 5px 10px;
    color: #aaa;
  }
  .shop_good_item {
    display: inline-block;
    width: 48%;
    margin: 0 1%;
  }
  .good_img {
    display: block;
  }
  .good_img img {
    width:  100%;
    height: 100%;
  }
  .shop_good_item .good_detail {
    padding: 8px 5px;
  }
  .good_detail .good_desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .good_detail .good_desc a {
    color: #999;
  }
  .good_detail .good_old_price {
    color: #999;
    text-decoration: line-through;
  }
  .good_detail .good_new_price {
    color: #e17c72;
  }
  .shop_entry {
    text-align: right;
    padding-bottom: 10px;
  }
  .shop_entry a {
    margin-right: 10px;
    color: #999;
  }
</style>
