<template>
  <div class="hello bg_white"  v-bind:class="{ 'bg_gray': page==3 || page==1}" >
    <div v-if="page==1" class="page1">
    </div>
    <div v-if="page==2" class="page3">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      page:1,
      limit:2,
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
  background:url(../../static/hbcl01/01.jpg) no-repeat 100%;
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
  background:url(../../static/hbcl01/02.jpg) no-repeat 100%;
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
  background:url() no-repeat 100%;
  background-size: contain;
  background-repeat: no-repeat;
    -webkit-background-size: contain;
    -o-background-size: contain;
    background-position: center 0;
}
</style>
