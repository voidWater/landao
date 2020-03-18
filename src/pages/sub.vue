<template>
  <div class="hello">
    <img class="zd-img" src="../../static/sub1.jpg" />
    <img class="zd-img" src="../../static/sub2.jpg" />
    <img class="zd-img" src="../../static/sub3.jpg" />
    <img class="zd-img" src="../../static/sub4.jpg" />

    <img class="zd-img" src="../../static/sub5.jpg" />
    <img class="zd-img" src="../../static/sub6.jpg" />
    <img class="zd-img" src="../../static/sub7.jpg" />
    <img class="zd-img" src="../../static/sub8.jpg" />

    <img class="zd-img" src="../../static/sub9.jpg" />
    <img class="zd-img" src="../../static/sub10.jpg" />
    <img class="zd-img" src="../../static/sub11.jpg" />
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
    height:33.3333%;
    width: 25%;
    float: left;
  }

.hello{
	position:absolute;
	top:5rem;
	bottom:0;
	left:0;
	right:0;
  background:url(../../static/cl_1.jpg) center 0 no-repeat;
  background-size: cover;
}
</style>
