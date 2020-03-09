<template>
  <div class="hello">
    <div class="head">122222</div>
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
	top:100px;
	bottom:0;
	left:0;
	right:0;
	background-color:blue;
}
</style>
