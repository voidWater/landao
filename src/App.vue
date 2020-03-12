<template>
  <div class="app">
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="10"><img src="http://www.landao.cc/templates/images/logo.png" /></el-col>
        <el-col :span="10">

          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <router-link to="/step1">走进蓝岛</router-link>
            </el-menu-item>
            <el-menu-item index="2">
             <router-link to="/step2">产品业务</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/step3">企业文化</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4">
          OA登录
        </el-col>
      </el-row>

      <div style="width: 800px;">

      </div>

    </div>
    <div class="qrcode">
      <img class="img" src="../static/1584020850.png"/>
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
	height:50px;
	background-color:#409EFF;
  text-align: center;
  padding: 10px
  }
  .head .el-menu{
    background-color:#409EFF;
  }
  .qrcode{
    position: fixed;
    right:30px;
    bottom: 30px;
    z-index: 99999;
  }
  .qrcode .img{
    width: 120px;
  }
</style>
