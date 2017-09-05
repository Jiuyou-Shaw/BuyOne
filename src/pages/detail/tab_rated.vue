<template>
  <div class="tab_rated">
    <div class="com_item">
      <div class="com_head">
        <span class="user_icon">
          <img src="http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg">
        </span>
        <span class="user_name">桔梗</span>
        <span class="com_day">2017.01.01</span>
        <span class="com_time">12:00:00</span>
        <span class="com_rate">
          <i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
        </span>
      </div>
      <p class="com_body">买的亚麻短裤，感觉板型做工还可以的，上身也比较舒适，就是不知道水洗后怎样~总体感觉性价比挺高</p>
    </div>
  </div>
</template>

<style scoped>
  .com_item {
    padding: 10px;
    font-size: 14px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc
  }
  .com_item .com_head {
    height: 30px;
    font-size: 13px;
    color: #ccc;
  }
  .com_head>span {
    margin: 0 2px;
    line-height: 30px;
  }
  .com_head .user_icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    overflow: hidden;
  }
  .com_head .user_icon img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .com_head .user_name {
    font-size: 14px;
    color: #818181;
  }
  .com_head .com_rate {
    color: #c78;
  }
  .com_body {
    margin: 10px;
    line-height: 1.5;
  }
</style>
