<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true 
      },
      data: {
        type: Array,
        default: null
      },
      listenScroll: {
        // 是否监听滚动列表
        type: Boolean,
        default: false
      },
      pullup:{
        //是否上拉刷新
        type: Boolean,
        default: false
      },
      beforeScroll: {
        // 滚动开始
        type: Boolean,
        default: false
      },
       refreshDelay: {
        // dom更新时间
        type: Number,
        default: 20
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll();
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          listenScroll:this.listenScroll
        })
        // 派发scroll事件
        if(this.listenScroll){
          let me = this;//me表示Vue实例
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }
        // 派发scrollend事件，上拉
        if(this.pullup){
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd')
            }
          })
        }
        // 派发
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        // 滚动到置顶元素
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
         this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style scoped>

</style>
