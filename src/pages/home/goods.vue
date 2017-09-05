<template>
  <div class="home_goods">
    <ul>
      <li v-for="good in homeGoods">
        <div class="g_item">
          <a :href="good.url + '/' + good.id">
            <img :src="good.src" height="180" width="180" class="g_img">
          </a>
          <div class="g_detail">
            <h3 class="g_desc">
              <a :href="good.url">{{good.title}}</a>
            </h3>
            <div class="g_price">
              <span class="g_new_price">{{good.newPrice}}</span>
              <span class="g_old_price">{{good.oldPrice}}</span>
            </div>            
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['homeGoods']
  }
</script>
