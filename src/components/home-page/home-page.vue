<template>
  <div class="home-page">
      生活服务
      <share :htp="this.htp">
      <img src="../../assets/logo.png" height="200" width="200" alt="">
      </share>
      <br>
        <share :htp="this.htp2">
        <img src="../../assets/logo.png" height="200" width="200" alt="">
      </share>
  </div>
</template>

<script>
// 引入分享组件
import Share from '../../base/share/share.vue'
export default {
	data(){
		return {
			htp:'weibo',
			htp2:'weixin',
		}
	},
	methods:{
		
	},
	created(){
		
	},
	components:{
		Share
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
