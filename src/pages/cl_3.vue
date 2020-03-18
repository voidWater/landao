<template>
  <div class="hello">
    <img class="zd-img" src="../../static/zd1.png" />
    <img class="zd-img" src="../../static/zd2.png" />
    <img class="zd-img" src="../../static/zd3.png" />
    <img class="zd-img" src="../../static/zd4.png" />
    <img class="zd-img" src="../../static/zd5.png" />
    <img class="zd-img" src="../../static/zd6.png" />
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

    }
  }
}
</script>

<style scoped>
  .zd-img{
    height:50%;
    width: 33.3333%;
    float: left;
  }
.head{
  height:3.75rem;
  background-color:#005bac;
  text-align: center;
  padding: 0.625rem
}
.hello{
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
  background:url(../../static/cl_1.jpg) center 0 no-repeat;
  background-size: cover;
}
</style>
