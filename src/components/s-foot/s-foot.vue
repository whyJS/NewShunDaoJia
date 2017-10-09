<template>
  <div class="footer">
    <router-link tag="div" class="tab-item" to="/homepage">
      <span class="tab-link">生活服务</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/onlinestore">
      <span class="tab-link">在线商城</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/order">
      <span class="tab-link">订单</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/mine">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
.tab-item{
  width: 20%;
  flex: 1;
  text-align: center;
}
</style>
