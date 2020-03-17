<template>
  <div class="app" v-bind:class="{ bg_white: page==5||page==3}" >
    <div class="scoll-bar">
      <div class="item" v-bind:class="{ item_cur: page==1}"></div>
      <div class="item" v-bind:class="{ item_cur: page==2}"></div>
      <div class="item" v-bind:class="{ item_cur: page==3}"></div>
      <div class="item" v-bind:class="{ item_cur: page==4}"></div>
      <div class="item" v-bind:class="{ item_cur: page==5}"></div>
    </div>
    <div class="arr" v-if="page!=5">
      <a @click="downPage">
        <img  src="../static/arr.png" />
      </a>
    </div>
    <div class="qrcode">
      <img class="img" src="../static/landao-36.png"/>
    </div>

    <transition :name="dh">
      <router-view class="app-router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import 'vue-transition.css'
export default {
  name: 'App',
  data:function(){
    return{
      page:1,
      dh:'move-fade-top-to-bottom'
    }
  },
  created:function(){
      this.$router.push({path:`/step1`})
  },
  mounted() {
     window.addEventListener('mousewheel',this.handleScroll,false)
  },
  methods:{
    downPage(){
      this.dh='move-fade-bottom-to-top'
      if(this.page+1>5)return;
      this.page = this.page+1;
      this.$router.push({path:`/step`+this.page})
    },
    handleScroll(e){
      var direction = e.deltaY>0?'down':'up'
      console.log(direction)
      if(direction=='up'){
        this.dh='move-fade-top-to-bottom'
        if(this.page-1<1)return;
        this.page = this.page-1;
      }else{
        this.dh='move-fade-bottom-to-top'
        if(this.page+1>5)return;
        this.page = this.page+1;
      }
      that.$router.push({path:`/step`+this.page})
    }
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
    background-color: #f7f7f7;
    perspective: 1200px;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: solid 1px #005bac;
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
  .bg_white{
    background-color: #FFFFFF;
  }

  .head .el-menu{
    background-color:#005bac;
  }
  .scoll-bar{
    position: fixed;
    left:3.75rem;
    top: 5rem;
    z-index: 99999;
  }
  .arr{
    position: fixed;
    width: 100%;
    text-align: center;
    bottom: 1.25rem;
    z-index: 99999;
  }
  .arr img{
    width: 3.125rem;
  }
  .scoll-bar .item{
    width: 0.625rem;
    height: 5rem;
    background-color: #dad6d69e;
    margin-top: 1.25rem;
  }
  .scoll-bar .item_cur{
    background-color: #005BAC;
  }
  .qrcode{
    position: fixed;
    right:3.125rem;
    bottom: 3.125rem;
    z-index: 99999;
  }
  .qrcode .img{
    width: 120px;
  }
</style>
