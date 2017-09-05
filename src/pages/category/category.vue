<template>
  <div class="category">
    <header-bar></header-bar>
    <nav-bar></nav-bar>
    <div class="cg_type">
      <ul>
        <li v-for="cg_item in categorys">
          <router-link :to="cg_item.url" :class="cg_item.class_name">{{cg_item.text}}</router-link>
        </li>
      </ul>
    </div>    
  </div>
</template>

<script>
import HeaderBar from '../../components/header.vue'
import NavBar from '../../components/nav.vue'
export default {
  data () {
    return {
      categorys: [
        { text: "饮食", url: "/list/1", class_name: "red" },
        { text: "服装", url: "/list/2", class_name: "blue" },
        { text: "配饰", url: "/list/3", class_name: "purple" },
        { text: "包袋", url: "/list/4", class_name: "sky" },
        { text: "鞋靴", url: "/list/5", class_name: "yellow" },
        { text: "美容护肤", url: "/list/6", class_name: "pink" },
        { text: "家居", url: "/list/7", class_name: "grass" },
        { text: "时间", url: "/list/8", class_name: "green" },
        { text: "3C数码", url: "/list/9", class_name: "red "}
      ]
    }
  },
  components: {
    HeaderBar,
    NavBar
  }
}
</script>

<style scoped>
  .category ul {
    padding: 10px;
  }
  .category li {
    display: inline-block;
    width: 30%;
    margin: 5px;
  }
  .category li a {
    display: block;
    height: 40px;
    font-size: 14px;
    color: #4742df;
    line-height: 40px;
    text-align: center;
    background: #fc4;
    border-radius: 15px;
  }
</style>
