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
	top:60px;
	bottom:0;
	left:0;
	right:0;
  background:url(https://photo.weibo.com/1649173367/wbphotos/large/mid/4480914917071651/pid/624c6377gy1gcor2ksi39j20t70hwae7) no-repeat 100%;
  background-size: cover;
  background-repeat: no-repeat;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
}
</style>
