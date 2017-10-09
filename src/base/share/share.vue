<template>
  <div class="share">
      <div class="share-wrapper" >
        <div ref="share_weibo" id="share_weibo" @click="share($event)">
            <slot></slot>
        </div>  
      </div>
  </div>
</template>

<script>
import mobShare from 'mobShare'
export default {
  data () {
    return {
    }
  },
  props:{
    htp:{
      type: String,
      default: 'weibo'
    },
    url:{
      type:String,
      default:'www.tongchuanggongxiang.com'
    },
    title:{
      type:String,
      default:'顺道嘉'
    },
    description:{
      type:String,
      default:''
    },
    pic:{
      type:String,
      default:''
    },
    reason:{
      type:String,
      default:''
    },
  },
  methods:{
    init(){
      mobShare.config({
          params: {
              url: this.url, // 分享链接
              title: this.title, // 分享标题
              description: this.description, // 分享内容
              pic: this.pic, // 分享图片，使用逗号,隔开
              reason:this.reason,//自定义评论内容，只应用与QQ,QZone与朋友网
          }
      });
    },
    share(event){
      var share = mobShare( this.htp ); 
      share.send();
    }
  },
  computed:{
  },
  components:{

  },
  mounted(){
      this.init()   
  },
  created(){
    this.init()
  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.share{

}
</style>
