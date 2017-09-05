<template>
  <div class="login">
    <div class="login_title">
      <a href="javascript:void(0);" class="cancel" @click="goBack">取消</a>     
      登录BuyOne 
    </div>
    <form class="login_form">
      <input class="form_ipt" type="text" name="user" placeholder="邮箱/手机号/用户名">
      <input class="form_ipt" type="text" name="password" placeholder="密码">
      <button class="form_btn" type="submit">登录</button>
    </form>
    <div class="login_other">使用其它方式登录 & 找回密码</div>
    <div class="signin">
      <a href="#">注册BuyOne</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .login {
    font-size: 16px;
  }
  .login_title {
    position: relative;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #384;
		font-weight: 700;
		border-bottom: 1px solid #dedede;
  }
  .login_title .cancel {
    position: absolute;
		top: 0;
		left: 0;
		display: block;
		padding: 0 20px;
		color: #6c8;
		font-size: 14px;
		font-weight: normal;
  }
  .login_form {
    padding: 0 15px;
		margin: 25px 0 5px;
  }
  .login_form input {
    display: block;
    width: 280px;
    height: 40px;
		line-height: 45px;
		padding: 0 10px;
		margin: 0 auto -1px;
		box-sizing: border-box;
		border: 1px solid #dedede;
  }
  .login_form input:nth-of-type(1){
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
  }
  .login_form input:nth-of-type(2){
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
  }
  .form_btn{
    display: block;
    height: 30px;
    width: 280px;
    margin: 10px auto;
    color: #fff;
    font-weight: 700;
    letter-spacing: 10px;
    border: none;
    background: #6c8;    
  }
  .login_other {
    text-align: center;
    font-size: 12px;
    color: #bbb;
  }
  .signin {
    margin: 20px 0;
    text-align: center;
  }
  .signin a {
    color: #5c98c5;
  }
</style>
