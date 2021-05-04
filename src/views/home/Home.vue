<template>
  <div class="home-nav">
    <nav-bar>
    	<template v-slot:left><div class="">《</div></template>
    	<template v-slot:center><div>首页</div></template>
    	<template v-slot:right><div>***</div></template>
    </nav-bar>
  </div>
  <!--banners-->
  <carousel :itemlist="banners"></carousel>

  <!--分类-->
  <Recommends :categorys="recommends" />

  <!--选项卡-->  
  <tab-control class="tab-control" :titles="['精选','热销','网红']" />
</template>

<script>

import { defineComponent } from 'vue';
import { getHomeData } from 'network/home';

import Carousel from 'components/common/carousel/Carousel';
import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/TabControl.vue';

import Recommends from 'views/home/childComp/Recommends';

export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    Carousel,
    Recommends,
    TabControl
  },
  data(){
    return{
      banners:[],
      recommends:[],
    }
  },
  created(){
  	//1、生命周期，请求数据
  	this.getHomeData()
  },
  methods:{
    getHomeData(){
      getHomeData().then(res=>{ //network/home 里的
        console.log(res.data);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(this.recommends);
      })
    }
  }
});
</script>

<style>
	.home-nav{
		background-color: #023727;
	}
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
