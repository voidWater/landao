<template>
  <div class="hello">
    <!-- <img class="zd-img" src="../../static/zd1.png" />
    <img class="zd-img" src="../../static/zd2.png" />
    <img class="zd-img" src="../../static/zd3.png" />
    <img class="zd-img" src="../../static/zd4.png" />
    <img class="zd-img" src="../../static/zd5.png" />
    <img class="zd-img" src="../../static/zd6.png" /> -->
    <div class="zds-img" v-for="(item,index) in subs"   v-bind:style="{backgroundImage:'url('+ item.imgUrl + ')'}"   @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)">
      <transition name="el-zoom-in-bottom">
      <div v-show="item.showTitle"  class="zds-shadw">
        <div class="title">{{item.title}}</div>
        <div class='des'>{{item.des}}</div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      subs:[{showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/zd1.png'},
      {showTitle:false,title:'海南省洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/zd2.png'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/zd3.png'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/zd4.png'},
      {showTitle:false,title:'海南省洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/zd5.png'},
      {showTitle:false,title:'洋浦蓝岛环保材料有限责任公司',des:'洋浦蓝岛环保材料有限责任公司是',imgUrl:'../../static/zd6.png'},

      ]
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
  @media (min-width: 1366px) {
       .zds-shadw .title{
         color:#005aa9;
         font-size: 2rem;
         font-weight: bold;
       }
       .zds-shadw .des{
         font-size: 1.5rem;
         color:#606266
       }
    }

    @media (max-width: 1996px) {
      .zds-shadw .title{
        color:#005aa9;
        font-size: 1.5rem;
        font-weight: bold;
      }
      .zds-shadw .des{
        font-size: 1rem;
        color:#606266
      }
    }
  .zds-shadw{
    text-align: center;
    padding: 1.875rem 0;
    background-color: #eae7e7d6;
    width: 100%;
    height: 35%;
  }
  .zd-img{
    height:50%;
    width: 33.3333%;
    float: left;
  }
  .zds-img{
    height:50%;
    width: 33.3333%;
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

</style>
