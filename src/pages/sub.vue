<template>
  <div class="hello">
    <div class="zds-img" v-for="(item,index) in subs"   v-bind:style="{backgroundImage:'url('+ item.imgUrl + ')'}"   @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)">
      <transition name="el-zoom-in-bottom">
      <div v-show="item.showTitle"  class="zds-shadw">
        <div class="title">{{item.title}}</div>
        <div class='des'>{{item.des}}</div>
      </div>
      </transition>
    </div>
    <!-- <img class="zd-img" src="../../static/sub1.jpg" /> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      urll:'../../static/sub1.jpg) no-repeat;',
      subs:[{showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub1.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub2.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub3.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub4.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub5.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub6.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub7.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub8.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub9.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub10.jpg'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/sub11.jpg'}]
    }
  },
  methods:{
    handleSelect(){

    },
    mouseOver(index){
      this.subs[index].showTitle=true
      console.log(index)
    },
    mouseLeave(index){
      this.subs[index].showTitle=false
      console.log(index)
    }
  }
}
</script>

<style scoped>
.zds-shadw{
  text-align: center;
  padding: 1.875rem 0;
  background-color: #eae7e7d6;
  width: 100%;
  height: 35%;
}
.zds-shadw .title{
  color:#005aa9;
  font-size: 2rem;
  font-weight: bold;
}
.zds-shadw .des{
  font-size: 1.4rem;
  color:#606266
}
.zds-img{
  height:33.3333%;
  width: 25%;
  float: left;

  z-index:-10;
  zoom: 1;
  background-color: #fff;

  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  display: flex;
  flex-direction: row;
  align-items:flex-end;

}
.zd-img{
  height:33.3333%;
  width: 25%;
  float: left;
}


.hello{
	position:absolute;
	top:5rem;
	bottom:0;
	left:0;
	right:0;
  background:url(../../static/cl_1.jpg) center 0 no-repeat;
  background-size: cover;
}
.bgimg{
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    min-width: 1000px;
    z-index:-10;
    zoom: 1;
    background-color: #fff;
    background: url(../../static/sub1.jpg) no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
}
</style>
