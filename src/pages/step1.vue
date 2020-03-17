<template>
  <div class="hello">
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="10"><img style="height: 60px;" src="../../static/landao-log.png" /></el-col>
        <el-col :span="12">
          <el-menu text-color="#fff" background-color="#005bac" active-text-color="#fff" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">走进蓝岛</template>
                <el-menu-item index="2-1">公司简介</el-menu-item>
                <el-menu-item index="2-2">子公司</el-menu-item>
                <el-menu-item index="2-3">企业历程</el-menu-item>
                <el-menu-item index="2-3">企业荣誉</el-menu-item>
              </el-submenu>
            <el-menu-item index="2">
             企业文化
            </el-menu-item>
            <el-menu-item index="3">
            新闻中心
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title">产品中心</template>
                <el-menu-item index="2-1">新材料</el-menu-item>
                <el-menu-item index="2-2">环保材料</el-menu-item>
                <el-menu-item index="2-3">重点工程</el-menu-item>
                <el-menu-item index="2-3">技术与应用</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">人力资源</template>
              <el-menu-item index="2-1">人才战略</el-menu-item>
              <el-menu-item index="2-2">英才招聘</el-menu-item>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleSelect(){

    }
  }
}
</script>

<style scoped>
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
  background:url(../../static/step1.jpg) center 0 no-repeat;
  background-size: cover;
}
</style>
