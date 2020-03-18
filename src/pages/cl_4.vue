<template>
  <div class="hello">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="16">
          <div class="title font-color">技术与应用</div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;海南蓝岛环保产业股份有限公司技术研发中心，主要从事胶凝材料、高性能混凝土、工业固废综合处理等方面技术研发和新技术应用。中心拥有一批多年从事材料、混凝土、环境科学领域研究工作的中高级技术人才，并通过与国内著名高等院校和环境材料研究机构合作，走产学研合作发展道路。</div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;技术研发中心实验室包含：粉体材料实验室（含澄迈蓝岛新型建材科技有限公司化验室和海南蓝岛环保产业股份有限公司化验室）、混凝土实验室（含海南蓝岛环保产业股份有限公司混凝实验室）、和工业固废实验室（含洋浦固体废弃物有限公司实验室）。实验室拥有各类专业技术人员四十余人，拥有一套完善的胶凝材料、混凝土和固体废弃物实验设备，实验室面积达2000多平方米。</div>
          <div class="dl">&nbsp;&nbsp;&nbsp;&nbsp;随着公司在工业固废综合处理、环境保护、新材料等领域的发展，将在技术研发中心基础上成立环境与材料研究所。</div>
          <div class="dl">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="cl_name">
                  <img src="../../static/clt_1.jpg" />
                  <div >复合水泥</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="cl_name">
                  <img src="../../static/clt_2.jpg" />
                  <div >复合煤粉灰</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="cl_name">
                  <img src="../../static/clt_3.jpg" />
                  <div >矿渣微分</div>
                </div>
              </el-col>
            </el-row>
          </div>
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
   margin-top: 2.50rem;
   font-size: 1.125rem;
 }
 .cl_name{
   text-align: center;
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
