<template>
  <div class="hello">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="16">
          <div class="title font-color">公司简介</div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;<span class="font-color">海南蓝岛环保产业股份有限公司</span>2006年11月成立于海南省儋州市木棠工业园区，并于2015年11月17日，作为海南生态保护和环境治理业的科技环保型企业，在全国中小企业股份转让系统有限责任公司挂牌并公开转让（<span class="font-color">股票交易代码：834335</span>），目前注册资本为22008万元，主营各类工业固体废弃物的处置及综合利用，是海南最大的资源综合利用节能环保型企业。</div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;13年来，蓝岛环保始终以低碳、环保、新材料为已任，秉持<span class="font-color">“科技+环保”</span>的经营理念，坚持倡导“蓝岛改变生活”的企业使命，沿着技术创新的道路，坚持以循环经济理论为指导，坚持清洁生产为根本，为社会创造产品、财富的同时，建设生态文明的美好家园。</div>
          <div>
            <img src="../../static/landao-37.jpg" />
          </div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;公司是一家以各类工业固体废弃物处置以及综合利用为主导的集团化公司，榜居2019年海南省百强民营企业第65位，旗下拥有7家全资子公司，4家控股子公司，3家参股公司。</div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;公司员工规模近400人，是一批高素质的人才队伍和管理团队，各类专业技术管理人员占32%以上。公司按照培育一流员工，创造一流管理，建设一流企业、追求一流业绩的目标，为公司的发展培养了人才和员工队伍，为社会创造就业做出了贡献。</div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;公司生产的“蓝岛”牌复合粉煤灰、矿渣微粉、复合水泥、矿渣水泥、普硅水泥、商品混凝土、蒸压灰砂砖、复合墙体材料、特种高性能胶凝材料等新产品、新材料是岛内公认优质产品。</div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;公司业务布局分布涵盖海南、广西和安徽地区，随着广西、安徽等大型固体废物处理项目的建成，在国内将形成年800万至1000万吨工业固废处置及新型建材生产能力。</div>
        </el-col>
        <el-col :span="4">&nbsp;</el-col>
      </el-row>
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
  }
}
</script>

<style scoped>
 .content{
   text-align: center;
   margin-top: 1.875rem;
 }
 .content .title{
   font-size: 1.875rem
 }
 .dl{
   text-align: left;
   margin-top: 1.25rem;
   font-size: 1.125rem;
 }
 .font-color{
   color:#259fb7;
   font-weight: bold;
 }
.hello{
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
  background-size: cover;
  background-repeat: no-repeat;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
}
</style>
