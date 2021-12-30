<template>
  <div>
    <router-view></router-view>
    <div class="box">
      <ul class="list">
        <li @click="btn1">首页</li>
        <li @click="btn2">关于</li>
        <li>购物车</li>
        <li>我的</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'',
  methods: {
    btn1(){
      this.$router.push('/home')
    },
    btn2(){
      this.$router.push('/about')
    }

  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.box {
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
}
.list {
  list-style: none;
  width: 100%;
  height: 80px;
  background-color: aqua;
}
.list li {
  float: left;
  height: 80px;
  width: 25%;
  line-height: 80px;
  text-align: center;
}
</style>
