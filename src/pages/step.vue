<template>
  <div class="hello">
	  <div class="content">12</div>
	  <router-link to="/name1">Go to namw</router-link>
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
	top:60px;
	bottom:0;
	left:0;
	right:0;
  background:url(http://free-cn-01.cdn.bilnn.com/ddimg/jfs/t1/98705/29/13973/107768/5e6303e0E8c0d15ee/07807050f2d43816.png);
  background-size: cover;
}
</style>
