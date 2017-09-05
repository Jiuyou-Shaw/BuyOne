<template>
  <div class="cart">
    <header-bar></header-bar>
    <nav-bar></nav-bar>
    <div class="login_tip">您未登录，请使用BuyOne账号登录</div>
    <div class="login_box">
      <a href="#/login" class="login_btn">登录</a>
      <p class="signin">没有BuyOne账号？<a href="#">注册</a></p>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../../components/header.vue'
import NavBar from '../../components/nav.vue'
export default {
  components: {
    HeaderBar,
    NavBar
  }
}
</script>

<style scoped>
  .login_tip {
    height: 120px;
    font-size: 14px;
    color: #359;
    line-height: 120px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
  }
  .login_box>a {
    display: block;
    text-align: center;
    width: 300px;
    height: 32px;
    margin: 40px auto 20px;
    font-size: 14px;
    letter-spacing: 4px;
    font-weight: 700;
    line-height: 32px;
    background: #6c8;
    border-radius: 5px;
    color: #fff;
  }
  .signin {
    color: #aaa;
    text-align: center;
  }
  .signin a {
    color: #6c8;
  }
</style>

