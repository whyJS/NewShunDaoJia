<template>
  <div id="app">
    <router-view></router-view>
    <s-foot></s-foot>
  </div>
</template>

<script>
// 引入s-footer
import SFoot from './components/s-foot/s-foot.vue'
export default {
  components:{
    SFoot
  }
}
</script>

<style>

</style>
