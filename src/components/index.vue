<template>
  <div id="app">
    <mt-header class="mtheader" fixed >
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
     
      <mt-button icon="more" slot="right"></mt-button>
      <mt-search  v-model="value"></mt-search>
    </mt-header>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="static/images/timg1.jpg" width="100%" height="95%">
      </mt-swipe-item>
        <mt-swipe-item>
          <img src="static/images/timg2.jpg" width="100%" height="95%">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="static/images/timg3.jpg" width="100%" height="95%">
      </mt-swipe-item>
    </mt-swipe>
    <div class="xinxi">
          <ul>
            <li><img src="static/images/show.png"><p>数码</p></li>
            <li><img src="static/images/show.png"><p>背包</p></li>
            <li><img src="static/images/show.png"><p>美妆</p></li>
            <li><img src="static/images/show.png"><p>配件</p></li>
          </ul>
      </div>
      <div align="center"><hr width="100%"  color="gainsboro" size="4"></div>
      <div class="jingxuan">
      </div>
     <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="static/images/show.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img slot="icon" src="static/images/shezhi.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="static/images/购物车.svg">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="static\images\用户配置文件.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script >
export default{
  
}
</script>
<style scoped>
.mtheader{
    background: white;
    color: black; 
}
.mint-swipe{
  height: 160px;
  margin-top: 10px;
}
.xinxi ul{
  margin-top:10px;
  padding:0;
  height: 60px;
  text-align: center;
  font-family:'PingFang';
  font-size: 14px;
  color: #666666;
}
.xinxi ul li img{
  width: 25px;
  
}
.xinxi ul li{
  list-style:none;
   padding-right: 6%; 
   padding-left: 6%; 
  display:inline-block;
}
.xinxi ul li p{
  margin-top: 0px;
}
.jingxuan{
  height: 60px;
}
</style>

 