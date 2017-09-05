<template>
  <div class="list_header">
    <a href="#/home" class="btn_index">BuyOne</a>
    <div class="cur_list" @click="showCategory">
      {{curList.text}}
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="cg_box" :class="{cg_show: isShow}">
      <ul>
        <li v-for="(item, index) in categorys" :key="index" @click="onSelect($event)" :class="[index == curList.id ? 'active' : '']">
          {{item.text}}
        </li>
      </ul>
    </div>
    <div class="mask" v-show="isShow" @click="hidMask"></div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      curList: {
        id:0,
        text:'饮食'
      },
      categorys:[
        {id:0,text:'饮食'},
        {id:1,text:'配饰'},
        {id:2,text:'鞋靴'},
        {id:3,text:'美容护肤'},
        {id:4,text:'家居'},
        {id:5,text:'时间'},
        {id:6,text:'3C数码'},
        {id:7,text:'情侣装'},
        {id:8,text:'母婴儿童'},
        {id:9,text:'内衣'},
        {id:10,text:'运动户外'},
        {id:11,text:'玩具'},
        {id:12,text:'汽车用品'},
        {id:12,text:'艺术品'},
        {id:12,text:'图书'}
      ]
    }
  },
  methods: {
    showCategory () {
      this.isShow = true
    },
    hidMask () {
      this.isShow =false
    },
    onSelect(e) {
      let that = e.target
      this.curList.id = that.key
      this.curList.text = that.innerText
      this.isShow = false
    }
  }
}
</script>

<style scoped>
  .list_header {
    position: relative;
    height: 42px;
    font-size: 15px;
    line-height: 42px;    
    background: #fff;
  }
  .list_header .btn_index {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
    margin-left: 15px;
		text-align: center;
    color: #6c8;
  }
  .cur_list {
		margin: 0 auto;
		text-align: center;
		color: #6c8;
  }
  .list_header .cg_box {
		position: fixed;
    top: -30%;
    left: 50%;
    z-index: 110;
    width: 220px;
    height: 320px;
    margin-left: -110px;
    margin-top: -160px;
    padding: 10px 0;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 0 6px #ccc;
    overflow: hidden;
    transition: top .5s ease 0s;
  }
  .list_header .cg_show {
		top: 40%;
  }
  .cg_box ul {
		width: 220px;
		height: 100%;
		overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .cg_box ul li {
		text-align: center;
		color: #888;
		font-size: 14px;
  }
  .list_header .cg_box ul li.active{
		background-color: #f0f0f0;
  }
  .list_header .mask {
		position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  ::-webkit-scrollbar {
    width: 3px;
    height: 5px;
    background: #ccc;
  }
</style>
