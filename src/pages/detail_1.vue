<template>
  <div class="hello bg_white"  v-bind:class="{ 'bg_gray': page==3 || page==1}" >
    <div v-if="page==1" class="page1">
      <el-row :gutter="20">
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="16">
          <div class="title font-color">蓝岛“灌装料”</div>
          <hr  class="font-color" style="border:1px dotted #0075c2" />

        </el-col>
        <el-col :span="4">&nbsp;</el-col>
      </el-row>
    </div>
    <div v-if="page==2" class="page5">
<!--      <el-row :gutter="20" justify="end">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="11">
         <div class='dl title-color' style="font-weight: bold;">【产品说明】</div>
         <div class="dl title-color title-rad">高强无收缩灌浆料</div>
         <div class="dl">是一种高性能聚合物改性水泥基灌浆材料，由水泥、精选骨料及各种复合添加剂组成。</div>
         <div class="dl title-color title-rad">高强无收缩灌浆料特点</div>
         <div class="dl">是强度发展快、流动度大、无需震捣、微膨胀、不收缩、粘结力强，具有无毒、无害、不老化、对水质及周围环境无污染，自密性好、抗蚀防锈等优点。</div>
         <div class="dl title-color title-rad">高强无收缩灌浆料适用范围</div>
         <div class="dl">设备基础二次浇筑、钢结构建筑地脚板锚固、混凝土结构加固、抢修及道路、桥梁、轨道支座灌浆等。</div>
         <div class="dl title-color title-rad">“蓝岛”牌高强无收缩灌浆料产品</div>
         <div class="dl">通用型、早强型、支座型、自流平型。</div>
        </el-col>
        <el-col :span="9" >
          <img src="https://high-cn-01.cdn.bilnn.com/get/wxcx01/2020/3/26/17115961f7a5a442" />
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="20">
          <div class="dl title-color title-rad">“蓝岛”牌高强无收缩灌浆料的选择</div>
          <div class="dl">[通用型]  适用于设备基座、基础二次灌浆，地脚螺栓锚固、建筑物梁、板、柱、基础和地坪补强加固等大部分灌浆需求。</div>
          <div class="dl">[早强型]  适用于铁路枕轨等快速抢修，水泥混凝土路面、机场跑道等快速修补，止水堵漏快速修补。</div>
          <div class="dl">[支座型]  适用于混凝土梁板柱加固角钢与混凝土之间缝隙灌浆及公路、铁路、桥梁支座灌浆专用。</div>
          <div class="dl">[自流平型] 灌浆层厚度小于15mm的设备基础及钢结构柱脚板二次灌浆，混凝土梁板柱加固角钢与混凝土之间缝隙灌浆，混凝土地面找平施工。</div>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row> -->
    </div>
    <div v-if="page==3" class="page3"></div>
    <div v-if="page==4" class="page4"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      page:1,
      limit:4,
      type:this.$route.query.type
    }
  },
  created() {
    window.addEventListener('mousewheel',this.handleScroll,false)
  },
  methods:{
    handleScroll(e){
      var direction = e.deltaY>0?'down':'up'
      var page=1;
      console.log(e.deltaY)
      console.log(direction)
      if(direction=='up'){
          if(this.page==1)return
          this.page = this.page-1;
      }else{
         if(this.page==this.limit)return
          this.page = this.page+1;
      }
    }
  }
}
</script>

<style scoped>
 .bg_white{
   background-color: #ffffff;
 }
 .bg_gray{
   background-color: #f7f7f7;
 }
.head{
  height:3.75rem;
  background-color:#005bac;
  text-align: center;
  padding: 0.625rem;
}
 .title{
   margin-top:1.25rem;
   font-size: 1.8rem;
   padding:1.8rem;
   text-align: center;
 }
 .title-color{
   color:#0075c2
 }
 .title-rad{
   border: 2px solid #0075c2;
   display: inline;
   padding: 0 15px;
   border-radius: 15px;
 }
 .dl{
   text-align: left;
   margin-top: 1.25rem;
   font-size: 1.25rem;
 }
 .font-color{
   color:#0075c2;
   font-weight: bold;
 }
.hello{
	position:absolute;
	top:5rem;
	bottom:0;
	left:0;
	right:0;
  background-size: cover;
}
.page1{
  background-color: #f7f7f7;
  position:absolute;
  top:0rem;
  bottom:0;
  left:0;
  right:0;
  background:url(https://high-cn-01.cdn.bilnn.com/get/wxcx01/2020/3/26/171159b43a73f14f) no-repeat 100%;
  background-size: contain;
  background-repeat: no-repeat;
    -webkit-background-size: contain;
    -o-background-size: contain;
    background-position: center 0;
}
.page3{
  background-color: #f7f7f7;
  position:absolute;
  top:0rem;
  bottom:0;
  left:0;
  right:0;
  background:url(https://high-cn-01.cdn.bilnn.com/get/wxcx01/2020/3/26/171158aa44197f5b) no-repeat 100%;
  background-size: contain;
  background-repeat: no-repeat;
    -webkit-background-size: contain;
    -o-background-size: contain;
    background-position: center 0;
}
.page4{
  position:absolute;
  top:0rem;
  bottom:0;
  left:0;
  right:0;
  background:url(http://high-cn-01.cdn.bilnn.com/get/wxcx01/2020/3/26/171157a12b3ba13b) no-repeat 100%;
  background-size: contain;
  background-repeat: no-repeat;
    -webkit-background-size: contain;
    -o-background-size: contain;
    background-position: center 0;
}
.page5{
  position:absolute;
  top:0rem;
  bottom:0;
  left:0;
  right:0;
  background:url(	https://high-cn-01.cdn.bilnn.com/get/wxcx01/2020/4/13/171739b25a0f7165) no-repeat 100%;
  background-size: contain;
  background-repeat: no-repeat;
    -webkit-background-size: contain;
    -o-background-size: contain;
    background-position: center 0;
}
</style>
