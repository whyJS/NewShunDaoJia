<template>
  <div class="login">
    登录
     <images @select="imgUload"></images>
     <img :src="img" alt="" width="100" height="100">
  </div>
</template>

<script>
// 引入图片上传组件
import images from '../../base/image/image.vue'
export default {
	data(){
		return{
			img:''
		}
	},
	methods:{
		imgUload(img){
			this.img=img
		}
	},
	 components:{
	    images
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
