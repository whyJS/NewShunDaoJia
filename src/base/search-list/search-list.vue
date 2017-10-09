<template>
  <div class="search-list" v-show="searches.length">
   <!--  <transition-group name="list" tag="ul"> -->
   <ul>
       <li :key="item" class="search-item" @click="selectItem(item)" v-for="item in searches">
        <span class="text">{{item}}</span>
        <span class="icon" @click.stop="deleteOne(item)">
          <i class="icon-delete"></i>
        </span>
      </li>
   </ul>

  <!--   </transition-group> -->
  </div>
</template>

<script>
  export default {
    props: {
      searches: {
        type: Array,
        default: []
      }
    },
    methods: {
      selectItem(item) {
        
        this.$emit('select', item)
      },
      deleteOne(item) {
       console.log(item)
        this.$emit('delete', item)
      }
    }
  }
</script>

<style scoped >

.search-item{
display: flex;
align-items: center;
height: 40px;
overflow: hidden ;
}

.list-enter-active, .list-leave-active{
transition: all 0.1s;
}
.list-enter, .list-leave-to{
height: 0;
}
.text{
flex: 1;
color: rgba(255, 255, 255, 0.5);
}

.icon{
  position: relative;
  
}
.icon:before{
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
}

.icon-delete{
font-size: 12px;
color: rgba(255, 255, 255, 0.3);
}

</style>