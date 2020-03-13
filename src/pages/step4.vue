<template>
  <div class="hello">
    qweqe
    <!-- <div class="animated bounceIn" id="ball">
    1314141232
    </div>
    <h1 class="animated infinite pulse duration-3s delay-1s">Example</h1>
	<div class="content">12333333</div> -->
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
  width: 100%;
	position:absolute;
	top:70px;
	bottom:0;
	left:0;
	right:0;
  background:url(../../static/landao-31.jpg) no-repeat 100%;
  background-size: contain;
  background-repeat: no-repeat;
    -webkit-background-size: contain;
    -o-background-size: contain;
    background-position: center 0;
}
</style>
