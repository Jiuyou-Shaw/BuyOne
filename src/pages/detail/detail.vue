<template>
  <div class="detail">
    <div class="detail_back" @click="goBack">
      <i class="fa fa-chevron-left"></i>
    </div>

    <detail-slider :sliders="sliders"></detail-slider>

    <div class="detail_info">
      <div class="g_name">PISN2016冬季新品  超Q弹加绒打底裤</div>
      <div class="g_price">        
        <span class="g_new_price">￥199</span>
        <span class="g_old_price">￥259</span>
      </div>
      <div class="g_fre">
        <div class="g_fre_l">
          <span class="g_fre_price">运费: ￥8.00</span>
          <span class="g_fre_info">非包邮区域</span>
        </div>
        <div class="g_fre_r">
          <i class="fa fa-heart-o"></i>
					<i class="fa fa-envelope-o"></i>                
        </div>
      </div>
    </div>

    <div class="detail_sel">
      <div class="sel_con">
        <span class="sel_tit">颜色</span>
        <div class="sel_items">
          <span v-for="(item,index) in colors" :class="{active:index == isColor}" @click="isColor = index">{{item}}</span>
        </div>
      </div>
      <div class="sel_con">
        <span class="sel_tit">尺寸</span>
        <div class="sel_items">
          <span v-for="(item,index) in size" :class="{active:index == isSize}" @click="isSize = index">{{item}}</span>
        </div>
      </div>
    </div>

    <div class="detail_num">
      <span class="num_tit">数量</span>
      <div class="num_con">
        <span class="minus" :class="{active: number>1}" @click="minus">-</span>
        <input type="number" class="number" v-model="number">
        <span class="addition" :class="{active: number>0}" @click="addition">+</span>
      </div>
    </div>

    <div class="detail_promise">
			<span>七天无理由退货</span>
			<span>正品保证</span>
			<span>独立品牌</span>
    </div>

    <div class="detail_tabs">
      <span @click="toggleTab('TabGood', $event)" data-id="0" :class="{active: isActive == 0}">商品详情</span>
      <span @click="toggleTab('TabRated', $event)" data-id="1" :class="{active: isActive == 1}">评价</span>
    </div>

    <div class="detail_tabs_con">
      <component :is="componentId"></component>
    </div>

    <div class="detail_cart">
			<div class="cart">
        <a href="#"><i class="fa fa-shopping-cart"></i></a>
      </div>
			<div class="add">
        <a href="#">加入购物车</a>
      </div>
			<div class="buy">
        <a href="#">立即购买</a>
      </div>
		</div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailSlider from './detail_slider'
import TabGood from './tab_good'
import TabRated from './tab_rated'
export default {
  data () {
    return {
      sliders: [],
      colors:['白色','青色','紫色'],
      size: ['S','M',"L","Xl"],
      number: 1,
      isSize: 0,
      isColor: 0,
      isActive: 0,
      componentId: 'TabGood'
    }
  },
  mounted () {
    this.getDetailSliders()
  },
  watch: {      
    number: function(val,oldVal){
      if(val<0){
        this.number = 1
      }else{
        this.number = parseInt(val)
      }
    }
  },
  methods: {
    getDetailSliders () {
      axios.get('/static/mock/detail/detail_slider.json').then((response) => {
        this.sliders = response.data.list
      }).catch(function(error) {
        console.log(error)
      })
    },
    goBack() {
      this.$router.go(-1)
    },
    minus() {
      if(this.number>0){
        this.number--
      }
    },
    addition() {
      if(isNaN(this.number)){
        this.number = 0
      }
      this.number++
    },
    toggleTab(componentId, e) {
      this.isActive = e.target.getAttribute("data-id")
      this.componentId = componentId
    }
  },
  components: {
    DetailSlider,
    TabGood,
    TabRated
  }
}
</script>


<style scoped>  
  .detail {
    padding-bottom: 100px;
  }
  .detail .detail_back{
		position: fixed;
		top: 15px;
		left: 15px;
		z-index: 1000;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #fff;
		font-size: 14px;
		background-color: rgba(0,0,0,.1);
		border-radius: 100%;
  }
  .detail .detail_info{
		padding: 15px;
		font-size: 16px;
		border-bottom: 1px solid #efefef;
  }
  .detail_info .g_price{
		margin: 10px 0;
  }
  .detail_info .g_new_price {
		color: #e87;
		font-weight: 600;
	}
	.detail_info .g_old_price{
    color: #ccc;
    text-decoration: line-through;
  }
  .detail_info .g_fre {
		height: 20px;
		line-height: 20px;
  }
  .detail_info .g_fre_l {
		max-width: 80%;
		float: left;
		font-size: 14px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
  }
  .detail_info .g_fre_r {
    float: right;
  }
  .detail_info .g_fre_info {
    color: #e87;
    font-size: 10px;
  }
  .detail_info .fa-heart-o {
		margin-right: 10px;
		color: #e87;
  }
  .detail_info .fa-envelope-o {
		color:#6c8;
  }
  
  .detail .detail_sel {
		padding: 10px;
		border-bottom: 1px solid #efefef;
  }
  .detail_sel .sel_con {
		display: -webkit-box;
		display: -webkit-flex;
		display: box;
		display: flex;
		line-height: 25px;
		margin: 5px 0;
  }
  .detail_sel .sel_tit {
		display: inline-block;
    width: 50px;
    margin-left: 10px;
		color: #888;
		font-size: 14px;
  }
  .detail_sel .sel_items{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
    flex: 1;
		font-size: 0;
  }
  .detail_sel .sel_items span {
		display: inline-block;
		width: 70px;
    height: 22px;
    line-height: 22px;
		text-align: center;
		margin: 0 5px;
		color: #fff;
		font-size: 14px;
		border-radius: 16px;
		background-color: #ccc;
  }
  .detail_sel .sel_items span.active{
		color: #fff;
		background-color: #6c8;
  }
  .detail .detail_num {
		display: -webkit-box;
		display: -webkit-flex;
		display: box;
		display: flex;
		height: 25px;
		line-height: 25px;
		padding: 15px;
		border-bottom: 1px solid #efefef;
  }
  .detail_num .num_tit {
		display: inline-block;
		width: 50px;
		color: #9b9b9b;
		font-size: 16px;
  }
  .detail_num .num_con {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		font-size: 0;
		margin-left: 5px;
  }
  .detail .minus,
	.detail .addition {
		display: inline-block;
		width: 25px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		color: #fff;
		font-size: 24px;
		font-weight: 600;
		background-color: #ccc;
		border-radius: 25px;
  }
  .detail .number{
		display: inline-block;
		width: 60px;
		height: 25px;
		line-height: 25px;
		color: #333;
		font-size: 16px;
		text-align: center;
		margin: 0 5px;
		border: none;
		vertical-align: top;
		background-color: #ccc;
		border-radius: 50px;
  }
  .detail span.active{
		background-color: #6c8;
  }
  .detail_promise {
		padding: 5px 15px;
		text-align: center;
		font-size: 0;
  }
  .detail_promise span {
		color: #bbb;
		font-size: 12px;
    padding: 0 5px;
    border-right: 1px solid #ccc;
  }
  .detail_promise span:last-of-type {
    border: none;
  }
  .detail_tabs {
		display: -webkit-box;
		display: -webkit-flex;
		display: box;
		display: flex;
		height:40px;
    margin-top: 30px;
    border-top: 1px solid #ddd;
		border-bottom: 2px solid #e78;
  }
  .detail_tabs span {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		line-height: 40px;
		text-align: center;
		color: #666;
		font-size: 16px;
  }
  .detail_tabs span.active {
		color: #e78;
  }
  .detail_cart {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    border-top: 1px solid #ddd;
    background: #fff;
  }
  .detail_cart>div {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }
  .detail_cart>div a {
    color: #fff;
  }
  .detail_cart .cart a {
    color: #e78;
    font-size: 16px;
  }
  .detail .add {
    background: #ebb888;
  }
  .detail .buy {
    background: #e18c82;
  }
</style>
