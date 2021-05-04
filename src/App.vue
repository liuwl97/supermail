<template>
<router-view></router-view>
  <tab-main />
</template>

<script>
import TabMain from 'components/content/TabMain.vue'

export default {
  name: 'app',
  components: {
    TabMain
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
