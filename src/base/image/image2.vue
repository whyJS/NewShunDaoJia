<template>
  <div class="image">    
      <input id="choose" type="file" ref="choose" accept="image/*" multiple>
      <ul class="img-list"></ul>
      <a id="upload" @click="upload">上传图片</a>
      <span class="tips">只允许上传jpg、png及gif</span>
      <div class="pic-list">
          你上传的图片(图片有效期为1分钟)：
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props:{

  },
  methods:{
    upload () {
        var filechooser =this.$refs.choose;
        //    用于压缩图片的canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');
        //    瓦片canvas
        var tCanvas = document.createElement("canvas");
        var tctx = tCanvas.getContext("2d");
        var maxsize = 100 * 1024;

        filechooser.click()
        filechooser.onchange = function(aa) {

            if (!this.files.length) return;
            var files = Array.prototype.slice.call(this.files);
            if (files.length > 9) {
            alert("最多同时只可上传9张图片");
            return;
            }
            files.forEach(function(file, i){
                if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
                var reader = new FileReader();
                var size = file.size / 1024 > 1024 ? (~~(10 * file.size / 1024 / 1024)) / 10 + "MB" : ~~(file.size / 1024) + "KB";
                reader.onload = function() {
                    var result = this.result;
                    
                    //如果图片大小小于100kb，则直接上传
                    if (result.length <= maxsize) {
                        files[i]=result;
                    }else{
                        let img = new Image();
                        img.src = result;
                        //      图片加载完毕之后进行压缩，然后上传
                        if (img.complete) {
                          console.log('压缩')
                          compress(img)
                          // files[i]=compress(img)
                          //   console.log( files[i].src)
                        } else {
                          console.log('压缩2')
                          // files[i]=compress(img)
                          //  console.log( files[i].src)
                        }
                    }

                };
                reader.readAsDataURL(file);

            })

        }

        // 图片压缩函数

        //    使用canvas对大图片进行压缩
        function compress(img) {
          console.log('xxx')
            var initSize = img.src.length;
            var width = img.width;
            var height = img.height;
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
                        tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                        ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                    }
                }
            } else {
                ctx.drawImage(img, 0, 0, width, height);
            }
            //进行最小压缩
            var ndata = canvas.toDataURL('image/jpeg', 0.1);
            console.log('压缩前：' + initSize);
            console.log('压缩后：' + ndata.length);
            console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
            tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
            console.log(ndata)
            return ndata;
        }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin: 0;padding: 0;}
    li{list-style-type: none;}
    a,input{outline: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}
    #choose{display: none;}
    canvas{width: 100%;border: 1px solid #000000;}
    #upload{display: block;margin: 10px;height: 60px;text-align: center;line-height: 60px;border: 1px solid;border-radius: 5px;cursor: pointer;}
    .touch{background-color: #ddd;}
    .img-list{margin: 10px 5px;}
    .img-list li{position: relative;display: inline-block;width: 100px;height: 100px;margin: 5px 5px 20px 5px;border: 1px solid rgb(100,149,198);background: #fff no-repeat center;background-size: cover;}
    .progress{position: absolute;width: 100%;height: 20px;line-height: 20px;bottom: 0;left: 0;background-color:rgba(100,149,198,.5);}
    .progress span{display: block;width: 0;height: 100%;background-color:rgb(100,149,198);text-align: center;color: #FFF;font-size: 13px;}
    .size{position: absolute;width: 100%;height: 15px;line-height: 15px;bottom: -18px;text-align: center;font-size: 13px;color: #666;}
    .tips{display: block;text-align:center;font-size: 13px;margin: 10px;color: #999;}
    .pic-list{margin: 10px;line-height: 18px;font-size: 13px;}
    .pic-list a{display: block;margin: 10px 0;}
    .pic-list a img{vertical-align: middle;max-width: 30px;max-height: 30px;margin: -4px 0 0 10px;}
</style>
