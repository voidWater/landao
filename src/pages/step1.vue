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
  background:url(https://high-cn-01.cdn.bilnn.com/get/wxcx01/2020/3/26/1711467047283116) center 0 no-repeat;
  background-size: cover;
}
</style>
