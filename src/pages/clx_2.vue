<template>
  <div class="hello" @click="openCl">
      <div class="cpinfo">
        <el-row :gutter="20">
          <el-col :span="5">&nbsp;</el-col>
          <el-col :span="14">
            <div class="title font-color">高强无收缩灌浆料：</div>
            <div class="des font-color">是一种高性能聚合物改性水泥基灌浆料，由水泥、精选骨料及各种复合添加剂组成<div class="more_btn">了解更多</div></div>
          </el-col>
          <el-col :span="5" style="padding: 3.125rem;"></el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleSelect(){

    },
    openCl(){
      this.$router.push({path:`/clx_1`})
      this.$emit('swTab','xcl')
    }
  }
}
</script>

<style scoped>
.more_btn{
  display: inline;
  padding: 0.625rem;
  border: 2px solid #f7f7f7;
  border-radius: 5px;
  font-size: 1.5rem;
  color: #f7f7f7;
  margin-left: 5rem;
}
.cpinfo{
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 30%;
  background-color: #d6d2d27d;
  text-align: center;
}
.cpinfo .title{
  margin-top: 1.875rem;
  font-size: 2rem;
  font-weight: bold;
  color:#0075c2;
}
.cpinfo .des{
  margin-top: 0.625rem;
  font-size: 1.5rem;
  color:#f7f7f7;
}
.head{
  height:3.75rem;
  background-color:#005bac;
  text-align: center;
  padding: 0.625rem
}
.hello{
	position:absolute;
	top:5rem;
	bottom:0;
	left:0;
	right:0;
  background:url(https://high-cn-01.cdn.bilnn.com/get/wxcx01/2020/3/26/171159b43a73f14f) center 0 no-repeat;
  background-size: cover;
}
</style>
