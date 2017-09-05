<template>
  <div class="my">
    <div class="my_nav">BuyOne</div>
    <ul class="my_lists">
      <li class="my_account">
        <a href="#">我的账号
          <i class="fa fa-angle-right"></i>
        </a>
      </li>
      <li class="my_order">
        <a href="#">我的订单
          <i class="fa fa-angle-right"></i>
        </a>
      </li>
      <li class="my_favor">
        <a href="#">我的收藏
          <i class="fa fa-angle-right"></i>
        </a>        
      </li>
      <li class="my_purse">
        <a href="#">我的钱包
          <i class="fa fa-angle-right"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .my .my_nav {
    height: 50px;
    font-size: 22px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-weight: 700;    
    background: #6c8;
  }
  .my .my_lists li {
    height: 30px;
    padding: 5px 10px;  
    line-height: 30px;
    border-bottom: 1px solid #ccc;  
  }
  .my_lists a {
    display: inline-block;
    width: 100%;
    font-size: 15px;
    color: #666;   
    overflow: hidden;
  }
  .my_lists i {
    float: right;
    margin-right: 10px;
    line-height: 30px;
    font-size: 16px;
  }
  a:link{text-decoration:none;}
</style>
