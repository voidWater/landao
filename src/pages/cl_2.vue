<template>
  <div class="hello" >
    <div class="foot-btn">
      <a href="#"><div @click="openCl">
        <div class="btn">&nbsp环&nbsp保&nbsp材&nbsp料&nbsp</div>
        <div>了解更多</div>
      </div></a>
    </div>
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

    },
    openCl(){
      this.$router.push({path:`/clhb_1`})
      this.$emit('swTab','hbcl')
    }
  }
}
</script>

<style scoped>
@media (min-width: 1500px) {
  .foot-btn{
    position: fixed;
    width: 100%;
    bottom: 6rem;
    text-align: center;
    color: #18abd4;
    font-size: 2.4rem;
  }
  .foot-btn .btn{
      display: inline;
      border:3px solid #18abd4;
      padding: 0 1.25rem;
      border-radius: 5px;
      margin-bottom: 5px;
  }
}
@media (max-width: 1500px) {
  .foot-btn{
      position: fixed;
      width: 100%;
      bottom: 4rem;
      text-align: center;
      color: #18abd4;
      font-size: 1.4rem;
    }
    .foot-btn .btn{
        display: inline;
        border:3px solid #18abd4;
        padding: 0 1.25rem;
        border-radius: 5px;
        margin-bottom: 5px;
    }
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
  a {
      text-decoration: none;
      color: #18abd4;
  }
  /*正常的未被访问过的链接*/
  a:link {
      text-decoration: none;
  }
  /*已经访问过的链接*/
  a:visited {
      text-decoration: none;
  }
  /*鼠标划过(停留)的链接*/
  a:hover {
      text-decoration: none;
  }
  /* 正在点击的链接，鼠标在元素上按下还没有松开*/
  a:active {
      text-decoration: none;
  }
  /* 获得焦点的时候 鼠标松开时显示的颜色*/
  a:focus {
      text-decoration: none;
  }
</style>
