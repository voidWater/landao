<template>
  <div class="app">
    <div class="head">
      <router-link to="/name">Go to namw12312312333331111</router-link>
      <router-link to="/name1">Go to namw</router-link>
    </div>

    <transition name="move-fade-bottom-to-top">
      <router-view class="app-router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import 'vue-transition.css'
export default {
  name: 'App',
  created:function(){

  }
}
</script>

<style>
  body{
  padding:0;
  margin:0;
  }
  html,
  body,
  .app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .app {
    background-color: #fff;
    perspective: 1200px;
  }

  .app .app-router-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
  }
  .head{
	height:60px;
	background-color:#42B983;
  }
</style>
