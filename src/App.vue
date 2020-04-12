<template>
  <div class="app" v-bind:class="{ bg_white: page==5||page==3}" >

    <div class="head" v-show="page==1||tabs[0].type=='xcl'||tabs[0].type=='hbcl'||tabs[0].type=='detail'">
          <el-row :gutter="20">
            <el-col :span="10"><a href="#"><img style="height: 60px;" src="../static/landao-log.png" @click="navTo(1)"/></a></el-col>
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
                    <el-menu-item index="4-4">技术与应用</el-menu-item>
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
    <!-- OA登录|联系我们 -->
            </el-col>
          </el-row>
        </div>

    <div class="scoll-bar">
      <a v-if="subPage" href="#" @click="reback"><span class="back_title"><i class="el-icon-back"></i>返回上级</span></a>
      <div v-for="item in tabs" @click="selectTab(item)">
        <a href="#"><div class="item"  v-bind:class="{ item_cur: page==item.page}"></div><span class="item_title" v-bind:class="{ item_title_cur: page==item.page}">{{item.name}}</span></a>
      </div>
    </div>

    <div class="arr" v-if="page!=tabs.length&&tabs.length!=0">
      <a @click="downPage">
        <img  src="../static/arr.png" />
      </a>
    </div>

    <div class="qrcode">
      <a href="#">
        <div v-if="page!=1" class="upArr" @click="topPage()">
          <i class="el-icon-upload2"></i>
        </div>
      </a>
      <img class="img" src="../static/landao-36.png"/>
    </div>

    <transition :name="dh">
      <router-view class="app-router-view" @swTab="swTab"></router-view>
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
      tabs:[{type:"main",path:"/step1",page:1},{type:"main",path:"/step2",page:2},{type:"main",path:"/step3",page:3},{type:"main",path:"/step4",page:4},{type:"main",path:"/step5",page:5}],
      subPage:false,
      subPageName:"",
    }
  },
  created:function(){
      this.$router.push({path:`/step1`})
  },
  mounted() {
     window.addEventListener('mousewheel',this.handleScroll,false)
  },
  methods:{
    swTab(val){
      this.subPage = true;
      this.subPageName = val;
      if(val=='xcl'){
        this.tabs=[{type:"hbcl",path:"/clx_1",page:1,name:'蓝岛灌浆料'},{type:"hbcl",path:"/clx_2",page:2,name:'高性能抢修（SF-1和SF-2）和抢建（HF-24和VM-24）砂浆'},{type:"hbcl",path:"/clx_3",page:3,name:'海工特种修复材料'},{type:"hbcl",path:"/clx_4",page:4,name:'蓝岛牌无机防水堵漏灵'}],
        this.jumpPage('clx_1',1);
      }else if(val=='hbcl'){
        this.tabs=[{type:"xcl",path:"/clhb_1",page:1,name:'“蓝岛”牌矿渣微粉'},{type:"xcl",path:"/clhb_2",page:2,name:'“蓝岛”牌水泥'}],
        this.jumpPage('clhb_1',1);
      }else if(val=='灌浆料'){
        //this.tabs=[{type:"detail",path:"/detail_1",page:1},{type:"detail",path:"/detail_2",page:2},{type:"detail",path:"/detail_3",page:3},{type:"detail",path:"/detail_4",page:4}]
        this.tabs=[];
        this.jumpPage('detail_1?type='+val,1);
      }else if(val=='抢修'){
        this.tabs=[];
        this.jumpPage('detail_2?type='+val,1);
      }else if(val=='海工'){
        this.tabs=[];
        this.jumpPage('detail_3?type='+val,1);
      }else if(val=='堵漏灵'){
        this.tabs=[];
        this.jumpPage('detail_4?type='+val,1);
      }else if(val=='微粉'){
        this.tabs=[];
        this.jumpPage('detail_11?type='+val,1);
      }else if(val=='水泥'){
        this.tabs=[];
        this.jumpPage('detail_12?type='+val,1);
      }
    },
    navTo(path){
      this.subPage = false;
      this.$router.push({path:`/step`+path});
      this.tabs=[{type:"main",path:"/step1",page:1},{type:"main",path:"/step2",page:2},{type:"main",path:"/step3",page:3},{type:"main",path:"/step4",page:4},{type:"main",path:"/step5",page:5}]
    },
    selectTab(item){
      this.jumpPage(item.path,item.page);
    },
    handleSelect(val){
      var path = 'step1';
      this.subPage = false;
      switch(val){
        case '1-1': {this.switchTab("main");this.jumpPage('step2',2);break}
        case '1-2': {this.switchTab("sub");this.jumpPage('sub',1);break}
        case '1-3': {this.switchTab("main");this.jumpPage('step4',4);break}
        case '1-4': {this.switchTab("main");this.jumpPage('step5',5);break}

        case '4-1': {this.switchTab("cl");this.jumpPage('cl_1',1);break}
        case '4-2': {this.switchTab("cl");this.jumpPage('cl_2',2);break}
        case '4-3': {this.switchTab("cl");this.jumpPage('cl_3',3);break}
        case '4-4': {this.switchTab("cl");this.jumpPage('cl_4',4);break}

        case '6':{window.open("https://www.tianyancha.com/company/192256142");break}
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
    topPage(){
      this.jumpPage(this.tabs[0].path,1)
    },
    reback(){
      let val = this.subPageName;
      console.log(val)
      if(val=='xcl'){
        this.switchTab("cl");this.jumpPage('cl_1',1);
        this.subPage=false;
      }else if(val=='hbcl'){
        this.switchTab("cl");this.jumpPage('cl_2',2);
        this.subPage=false;
      }else if(val=='灌浆料'){
        this.subPageName = 'xcl'
        this.tabs=[{type:"hbcl",path:"/clx_1",page:1,name:'蓝岛灌浆料'},{type:"hbcl",path:"/clx_2",page:2,name:'高性能抢修（SF-1和SF-2）和'},{type:"hbcl",path:"/clx_3",page:3,name:'海工特种修复材料'},{type:"hbcl",path:"/clx_4",page:4,name:'蓝岛牌无机防水堵漏灵'}],
        this.jumpPage('clx_1',1);
      }else if(val=='抢修'){
        this.subPageName = 'xcl'
        this.tabs=[{type:"hbcl",path:"/clx_1",page:1,name:'蓝岛灌浆料'},{type:"hbcl",path:"/clx_2",page:2,name:'高性能抢修（SF-1和SF-2）和'},{type:"hbcl",path:"/clx_3",page:3,name:'海工特种修复材料'},{type:"hbcl",path:"/clx_4",page:4,name:'蓝岛牌无机防水堵漏灵'}],
        this.jumpPage('clx_1',1);
      }else if(val=='海工'){
        this.subPageName = 'xcl'
        this.tabs=[{type:"hbcl",path:"/clx_1",page:1,name:'蓝岛灌浆料'},{type:"hbcl",path:"/clx_2",page:2,name:'高性能抢修（SF-1和SF-2）和'},{type:"hbcl",path:"/clx_3",page:3,name:'海工特种修复材料'},{type:"hbcl",path:"/clx_4",page:4,name:'蓝岛牌无机防水堵漏灵'}],
        this.jumpPage('clx_1',1);
      }else if(val=='堵漏灵'){
        this.subPageName = 'xcl'
       this.tabs=[{type:"hbcl",path:"/clx_1",page:1,name:'蓝岛灌浆料'},{type:"hbcl",path:"/clx_2",page:2,name:'高性能抢修（SF-1和SF-2）和'},{type:"hbcl",path:"/clx_3",page:3,name:'海工特种修复材料'},{type:"hbcl",path:"/clx_4",page:4,name:'蓝岛牌无机防水堵漏灵'}],
       this.jumpPage('clx_1',1);
      }else if(val=='微粉'){
        this.subPageName = 'hbcl'
        this.tabs=[{type:"xcl",path:"/clhb_1",page:1,name:'“蓝岛”牌矿渣微粉'},{type:"xcl",path:"/clhb_2",page:2,name:'“蓝岛”牌水泥'}],
        this.jumpPage('clhb_1',1);
      }else if(val=='水泥'){
        this.subPageName = 'hbcl'
        this.tabs=[{type:"xcl",path:"/clhb_1",page:1,name:'“蓝岛”牌矿渣微粉'},{type:"xcl",path:"/clhb_2",page:2,name:'“蓝岛”牌水泥'}],
        this.jumpPage('clhb_1',1);
      }
    },
    switchTab(type){
      if(type=='sub'){
        this.tabs=[];
        return;
      }
      if(this.tabs.length!=0){
        if(this.tabs[0].type==type)return
      }
      if(type == 'main')
      this.tabs=[{type:"main",path:"/step1",page:1},{type:"main",path:"/step2",page:2},{type:"main",path:"/step3",page:3},{type:"main",path:"/step4",page:4},{type:"main",path:"/step5",page:5}]
      if(type == 'cl')
      this.tabs=[{type:"cl",path:"/cl_1",page:1,name:'新材料'},{type:"cl",path:"/cl_2",page:2,name:'环保材料'},{type:"cl",path:"/cl_3",page:3,name:'重点工程'},{type:"cl",path:"/cl_4",page:4,name:'技术与应用'}]
    },
    downPage(){
      this.dh='move-fade-bottom-to-top'
      // if(this.page+1>5)return;
      // this.page = this.page+1;
      // this.$router.push({path:`/step`+this.page})
      var page=1;
      if(this.page+1>this.tabs[page].length)return;
      page = this.page+1;
      this.jumpPage(this.tabs[page-1].path,page)
    },
    handleScroll(e){
      if(this.tabs.length==0){
        return
      }
      var direction = e.deltaY>0?'down':'up'
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
      this.jumpPage(this.tabs[page-1].path,page)
    }
  }
}
</script>
<style>
  @media (min-width: 576px) {
     body{
      font-size: 24px;
    }
  }
  @media (min-width: 1024px) {
     body {
      font-size: 48px;
    }
  }
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

  /* .scoll-bar .item{
    width: 0.625rem;
    height: 5rem;
    display: inline-block;
    background-color: #dad6d69e;
    margin-top: 1.25rem;
  }
  .scoll-bar .back_title{
    margin-top: 1.25rem;
    color: #005BAC;
    font-size: 1.6rem;
    background-color: #ffffff80;
    border: 1px solid #aaad84;
    padding: 0.3125rem 0.625rem;
    border-radius: 1.8rem;
  }
  .scoll-bar .item_title{
    font-size: 1.5rem;
    padding: 0.625rem;
    color: #dad6d69e;
  } */
  .scoll-bar .item{
    width: 0.425rem;
    height: 3rem;
    display: inline-block;
    background-color: #dad6d69e;
    margin-top: 1.25rem;
  }
  .scoll-bar .back_title{
    margin-top: 1.25rem;
    color: #005BAC;
    font-size: 1.2rem;
    background-color: #ffffff80;
    border: 1px solid #aaad84;
    padding: 0.3125rem 0.625rem;
    border-radius: 1.8rem;
  }
  .scoll-bar .item_title{
    font-size: 1.2rem;
    padding: 0.625rem;
    color: #dad6d69e;
  }
  .scoll-bar .item_cur{
    background-color: #005BAC;
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
  .upArr{
    text-align: center;
    background-color: #ffffff91;
    color: #0e4eff;
    margin: 0.625rem auto;
    width: 70px;
    height: 70px;
    border-radius: 70px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
  }
  a {
      text-decoration: none;
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
