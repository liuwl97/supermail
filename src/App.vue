<template>
    <router-view></router-view>
    <tab-main /> 
</template>

<script>
import TabMain from 'components/content/TabMain';
  export default{
    name:"app",
    components:{
      TabMain
    }
  }
</script>
<style lang="scss">
  @import "assets/css/base.css"; 
</style>
