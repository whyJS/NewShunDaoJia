<template>
  <div class="image">    
      <input class="choose" type="file" ref="choose" @change="upload" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
  </div>
</template>

<script>
export default {
  data () {
    return {
       aa:'',
       xx:'zz'
    }
  },
  props:{

  },
  methods:{
    upload () {
          var fup = this.$refs.choose;
          var img = fup.files[0];
          var image = new Image();
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext('2d');
          //    瓦片canvas
          var tCanvas = document.createElement("canvas");
          var tctx = tCanvas.getContext("2d");
          var maxsize = 100 * 1024;
          var size = img.size / 1024 > 1024 ? (~~(10 * img.size / 1024 / 1024)) / 10 + "MB" : ~~(img.size / 1024) + "KB";
          image.onload =  ()=> {

              if(img.size <= maxsize){
                  this.aa=image.src
                  this.$emit('select',this.aa);
                  return
              }
              var initSize = image.src.length;
              var width = image.width;
              var height = image.height;
              //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
              var ratio;
              if ((ratio = width * height / 4000000) > 1) {
                  ratio = Math.sqrt(ratio);
                  width /= ratio;
                  height /= ratio;
              } else {
                  ratio = 1;
              }
              canvas.width = width;
              canvas.height = height;
              //        铺底色
              ctx.fillStyle = "#fff";
              ctx.fillRect(0, 0, canvas.width, canvas.height);


              //如果图片像素大于100万则使用瓦片绘制
              var count;
              if ((count = width * height / 1000000) > 1) {
                  count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
                  //            计算每块瓦片的宽和高
                  var nw = ~~(width / count);
                  var nh = ~~(height / count);
                  tCanvas.width = nw;
                  tCanvas.height = nh;
                  for (var i = 0; i < count; i++) {
                      for (var j = 0; j < count; j++) {
                          tctx.drawImage(image, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                          ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                      }
                  }
              } else {
                  ctx.drawImage(image, 0, 0, width, height);
              }
              this.aa=canvas.toDataURL("image/jpeg", 0.1);
              // tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
              this.$emit('select',this.aa);
          }

          // 判断是否图片
          if (!img) {
             return;
          }

          // 判断图片格式
          if (!(img.type.indexOf('image') == 0 && img.type && /\.(?:jpg|png|gif)$/.test(img.name))) {
             alert('图片只能是jpg,gif,png');
             return;
          }
          // 判断图片大小
          var reader = new FileReader();

          reader.onload = (e)=> { // reader onload start
            console.log(this.xx)
              var url = reader.result;
              image.src = url;
          } // reader onload end

          reader.readAsDataURL(img);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.choose{
  width: 100%;
  height: 100%;
}
</style>
