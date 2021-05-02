<template>

    <div class="tab-bar-item" @click="itemClick">
      <slot v-if="!isActive" name='item-icon'></slot>
      <slot v-else name='item-icon-active'></slot>
      <!-- <div :class="{active:isActive}"> -->
      <div :style="activeStyle">
        <slot name='item-text'></slot>
      </div>
    </div>
      

</template>

<script>
  
  export default{
    name:"TabBarItem",
    props:{
      path:String,
      //父传子，给个默认的绿色
      activeColor:{
        type:String,
        default:'green',
      }
    },
    data(){
      return{
        
      }
    },
    computed:{
      //是否选中导航
      isActive(){
        return this.$route.path == this.path
      },
      //选中导航的时候，文字的字体颜色处理
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path);
      }
    },
    components:{
     
    }
  }
</script>
<style lang="css">
 .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    /*line-height: 49px;*/
    font-size: 14px;
  }
 
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: green;
  }
</style>

