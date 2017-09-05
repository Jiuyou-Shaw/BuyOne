<template>
  <div class="nav" :class="{fixed: isFixedNav}">
    <ul>
      <li v-for="(item,index) in navItems">
        <router-link :to="item.url">{{ item.desc }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      navItems: [
        {index: 1, desc: '首页', url: '/home'},
        {index: 2, desc: '分类', url: '/category'},
        {index: 3, desc: '购物车', url: '/cart'},
        {index: 4, desc: '我的', url: '/my'}
      ]
    }
  },
  computed: {
    ...mapState([
      'isFixedNav'
    ])
  },
  mounted () {
    window.addEventListener('scroll', this.toggleFixedNav)
  },
  methods: {
    ...mapActions([
      'toggleFixedNav'
    ])
  }
}
</script>

<style scoped>
  .nav {
    height: 42px;
    line-height: 42px;
    background: #fff;
    border-bottom: 2px solid #6c8;
  }
  .nav ul {
    display: flex;
    display: -o-flex;
    display: -webkit-box;
    display: -webkit-flex;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;    
  }
  .nav li {
    -webkit-box-flex: 1;
	  -webkit-flex: 1;
    flex: 1;
    vertical-align: middle;
    text-align: center;
  }
  .nav li a {
    color: #6c8;
    font-size: 16px;
  }
  .nav.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>
