<template>
  <div class="hello" @click="openCl">
     <div class="cp-img"> <img style="width:100%" src="../../static/cpzx-12.jpg" /> </div>
      <div class="cpinfo">
        <el-row :gutter="20">
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="22">
            <div class="title font-color">海工特种修复材料</div>
            <div class="des font-color">是一种高性能聚合物改性水泥基灌浆料，由水泥、精选骨料及各种复合添加剂组成<a href="#"><div class="more_btn" @click="openCl">了解更多</div></a></div>
          </el-col>
          <el-col :span="1" style="padding: 3.125rem;"></el-col>
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
      this.$emit('swTab','海工')
    }
  }
}
</script>

<style scoped>
.cpinfo{
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 30%;
  background-color: #d6d2d27d;
  text-align: center;
}
@media (min-width: 1500px) {
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
     .more_btn{
       display: inline;
       padding: 0.625rem;
       border: 2px solid #f7f7f7;
       border-radius: 5px;
       font-size: 1.5rem;
       color: #f7f7f7;
       margin-left: 5rem;
     }
  }
  @media (max-width: 1500px) {
     .cpinfo .title{
       margin-top: 1.275rem;
       font-size: 1.5rem;
       font-weight: bold;
       color:#0075c2;
     }
     .cpinfo .des{
       margin-top: 0.325rem;
       font-size: 1.2rem;
       color:#f7f7f7;
     }
     .more_btn{
       display: inline;
       padding: 0.625rem;
       border: 2px solid #f7f7f7;
       border-radius: 5px;
       font-size: 1.2rem;
       color: #f7f7f7;
       margin-left: 3rem;
     }
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
  background:url(../../static/bj.jpg) center 0 no-repeat;
  background-size: cover;
}
.cp-img{
  margin: auto auto;
  text-align: center;
  margin-top: 6.25rem;
  border-radius: 1.25rem;
  width: 30%;
}
</style>
