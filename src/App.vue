<template>
  <div class="app" v-bind:class="{ bg_white: page==5||page==3}" >

    <div class="head" v-show="page==1">
          <el-row :gutter="20">
            <el-col :span="10"><img style="height: 60px;" src="../static/landao-log.png" @click="navTo(1)"/></el-col>
            <el-col :span="12">
              <el-menu text-color="#fff" background-color="#005bac" active-text-color="#fff" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="1">
                    <template slot="title">走进蓝岛</template>
                    <el-menu-item index="1-1">公司简介</el-menu-item>
                    <el-menu-item index="1-2">子公司</el-menu-item>
                    <el-menu-item index="1-3">企业历程</el-menu-item>
                    <el-menu-item index="1-4">企业荣誉</el-menu-item>
                  </el-submenu>
                <el-menu-item index="2">
                 企业文化
                </el-menu-item>
                <el-menu-item index="3">
                新闻中心
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">产品中心</template>
                    <el-menu-item index="4-1">新材料</el-menu-item>
                    <el-menu-item index="4-2">环保材料</el-menu-item>
                    <el-menu-item index="4-3">重点工程</el-menu-item>
                    <el-menu-item index="4-3">技术与应用</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">人力资源</template>
                  <el-menu-item index="5-1">人才战略</el-menu-item>
                  <el-menu-item index="5-2">英才招聘</el-menu-item>
                </el-submenu>
                <el-menu-item index="6">
                  投资者关系
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="2">
    OA登录|联系我们
            </el-col>
          </el-row>
        </div>

    <div class="scoll-bar">
      <div v-for="item in tabs" @click="selectTab(item)">
        <a><div class="item"  v-bind:class="{ item_cur: page==item.page}"></div></a><span class="item_title" v-bind:class="{ item_title_cur: page==item.page}">{{item.name}}</span>
      </div>
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
      dh:'move-fade-top-to-bottom',
      tabs:[{type:"main",path:"/step1",page:1},{type:"main",path:"/step2",page:2},{type:"main",path:"/step3",page:3},{type:"main",path:"/step4",page:4},{type:"main",path:"/step5",page:5}]
    }
  },
  created:function(){
      this.$router.push({path:`/step1`})
  },
  mounted() {
     window.addEventListener('mousewheel',this.handleScroll,false)
  },
  methods:{
    navTo(path){
      this.$router.push({path:`/step`+path})
    },
    selectTab(item){
      this.jumpPage(item.path,item.page);
    },
    handleSelect(val){
      console.log(val)
      var path = 'step1';
      switch(val){
        case '1-1': {this.switchTab("main");this.jumpPage('step2',2);break}
        case '1-3': {this.switchTab("main");this.jumpPage('step4',4);break}
        case '1-4': {this.switchTab("main");this.jumpPage('step5',5);break}

        case '4-1': {this.switchTab("cl");this.jumpPage('cl_1',1);break}
      }
    },
    jumpPage(path,page){
      if(this.page>page){
        this.dh = 'move-fade-top-to-bottom'
      }else{
        this.dh = 'move-fade-bottom-to-top'
      }
      this.page = page;
      this.$router.push({path:path})
    },
    switchTab(type){
      if(this.tabs[0].type==type)return
      if(type == 'main')
      this.tabs=[{type:"main",path:"/step1",page:1},{type:"main",path:"/step2",page:2},{type:"main",path:"/step3",page:3},{type:"main",path:"/step4",page:4},{type:"main",path:"/step5",page:5}]
      if(type == 'cl')
      this.tabs=[{type:"cl",path:"/cl_1",page:1,name:'新材料'},{type:"cl",path:"/cl_2",page:2,name:'环保材料'},{type:"cl",path:"/cl_3",page:3,name:'重点工程'},{type:"cl",path:"/cl_4",page:4,name:'技术与应用'}]
    },
    downPage(){
      this.dh='move-fade-bottom-to-top'
      if(this.page+1>5)return;
      this.page = this.page+1;
      this.$router.push({path:`/step`+this.page})
    },
    handleScroll(e){
      var direction = e.deltaY>0?'down':'up'
      console.log(direction)
      var page=1;
      if(direction=='up'){
        this.dh='move-fade-top-to-bottom'
        if(this.page-1<1)return;
        page = this.page-1;
      }else{
        this.dh='move-fade-bottom-to-top'
        if(this.page+1>this.tabs[page].length)return;
        page = this.page+1;
      }
      console.log(this.tabs[page].path)
      console.log(page)
      this.jumpPage(this.tabs[page].path,page)
      //this.$router.push({path:`/step`+this.page})
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
  .head{
    height:3.75rem;
    background-color:#005bac;
    text-align: center;
    padding: 0.625rem
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
    display: inline-block;
    background-color: #dad6d69e;
    margin-top: 1.25rem;
  }
  .scoll-bar .item_cur{
    background-color: #005BAC;
  }
  .scoll-bar .item_title{
    font-size: 1.5rem;
    padding: 0.625rem;
    color: #dad6d69e;
  }
  .scoll-bar .item_title_cur{
    color: #005BAC;
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
