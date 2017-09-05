<template>
  <div class="home_swiper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="slide in sliders" :key="slide.id">
          <a :href="slide.url" target="_blank">
            <img :src="slide.img">
          </a>          
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
  import  {mapState, mapActions } from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  
  export default {
    name: 'carrousel',
		//props:['sliders'],
		data() {
      return {
        swiperOption: {
          initialSlide:1,
          autoplay: 3000,
          loop: true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true
        }
      }
		},
    computed: {
      ...mapState([
        'sliders'
      ])
    },
    mounted () {
      this.getSliders()
    },
    methods: {
      ...mapActions([
        'getSliders'
      ])
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .home_swiper {
    margin: 2px 0 5px;
  }
  .home_swiper .swiper-slide {
    height: 100px;
  }
  .home_swiper .swiper-slide img {
    width: 100%;
    height: 100%;
  }
</style>
