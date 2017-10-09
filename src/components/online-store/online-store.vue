<template>
  <div class="onstore">
      <listview :data="city"></listview>
  </div>
</template>

<script>
// 引入城是列表方法
import {cityData} from '../../common/js/city.js'
// 引入城市列表组件
import listview from '../../base/listview/listview.vue'
export default {
	created(){
		this.city=cityData
	},
	components:{
		listview
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.onstore{
	position: fixed;
	top: 0px;
	left: 0px;
	bottom: 40px;
	right: 0px;
}
</style>
