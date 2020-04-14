<template>
  <div class="hello">

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
  background:url(http://free-cn-01.oss.tusy.xyz/ddimg/jfs/t1/100169/6/18528/1219786/5e9583d6E8d8ceb74/497d403a0486416f.jpg) center 0 no-repeat;
  background-size: cover;
}
</style>
