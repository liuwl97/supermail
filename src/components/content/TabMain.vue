<template>
  <div id="nav">
    <tab-bar>

      <tab-bar-item path="/home" activeColor="green">
        <template v-slot:item-icon><img src="~assets/img/tabbar/icon_home.png" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/icon_home1.png" alt=""></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor="green">
        <template v-slot:item-icon><img src="~assets/img/tabbar/icon_yuyue.png" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/icon_yuyue1.png" alt=""></template>
        <template v-slot:item-text><div>预约</div></template>
      </tab-bar-item>

      <tab-bar-item path="/order" activeColor="green">
        <template v-slot:item-icon><img src="~assets/img/tabbar/icon_order.png" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/icon_order1.png" alt=""></template>
        <template v-slot:item-text><div>订单</div></template>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor="green">
        <template v-slot:item-icon><img src="~assets/img/tabbar/icon_me.png" alt=""></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/icon_me1.png" alt=""></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>

  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue';
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue';
  export default{
    name:"TabMain",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>


