<template>
  <div class="hello">
	<div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
  background:url(https://high-cn-01.cdn.bilnn.com/get/wxcx01/2020/3/26/171146c2f938c373) no-repeat 100%;
  background-size: cover;
  background-repeat: no-repeat;
    -webkit-background-size: contain;
    -o-background-size: cover;
    background-position: center 0;
}
</style>
