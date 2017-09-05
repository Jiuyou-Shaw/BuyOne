<template>   
  <div class="header">
    <div class="header_con">
      <div class="logo_box" v-show="!isSearch">
        <div class="logo">BuyOne</div>
        <div class="search_icon_sm" @click="onSearch">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>    
      <div class="search_box" v-show="isSearch">
        <input type="text" name="content" class="ipt_search">
        <span class="search_icon_lg" @click="onSubmit">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </div>  
    </div>
    <div class="mask" v-show="isSearch" @click="toggleMask"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isSearch: false
      }
    },
    methods: {
      onSearch: function () {
        this.isSearch = !this.isSearch
      },
      onSubmit: function () {
        let v = document.querySelector('.ipt_search').value  
        alert(v)    
      },
      toggleMask: function () {
        this.isSearch = !this.isSearch
      }
    }
  }
</script>

<style scoped>
  .header .header_con {
    background: #6c8;
    overflow: hidden;
    color: #fff;
    z-index: 110;
  }
  .header .logo_box {
    height: 50px;
    font-size: .6rem;
    line-height: 50px;
  }
  .logo_box .logo {
    float: left;
    margin: 0 10px;
  }
  .logo_box .search_icon_sm {
    float: right;
    margin: 0 10px;
    cursor: pointer;
  }
  .search_box {
    position: relative;
    height: 30px;
    margin: 10px 30px;
    padding: 0 20px;
    border: 1px solid #fff;
    border-radius: 30px;
  }
  .search_box .ipt_search {
    width: 100%;
    line-height: 30px;
    border: none;
    background: transparent;
  }
  .search_box .search_icon_lg {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 20px;
    font-size: .5rem;
    line-height: 30px;
  }
  .header .mask {
    position: fixed;
    background: rgba(0,0,0,.3);
    width: 100%;
    height: 100%;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  }
</style>
