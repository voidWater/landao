<template>
  <div class="hello">
	<div class="content">12333333</div>
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
	top:70px;
	bottom:0;
	left:0;
	right:0;
  background:url(../../static/landao-30.jpg) no-repeat 100%;
  background-size: cover;
  background-repeat: no-repeat;
    -webkit-background-size: contain;
    -o-background-size: cover;
    background-position: center 0;
}
</style>
