<template>
<tab-bar>
      <tab-bar-item path="/home" activeColor="#ff5777">
        <template v-slot:icon>
          <img src="../assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:icon-active>
          <img src="../assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:text>
          <p>首页</p>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/about">
        <template v-slot:icon>
          <img src="../assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:icon-active>
          <img src="../assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:text>
          <p>关于</p>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <template v-slot:icon>
          <img src="../assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:icon-active>
          <img src="../assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:text>
          <p>购物车</p>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor="blue">
        <template v-slot:icon>
          <img src="../assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:icon-active>
          <img src="../assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:text>
          <p>我的</p>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "./TabBarItem.vue";
export default {
  name: '',
  data(){
    return {}
  },
  components:{
      TabBar,
      TabBarItem


  }
}
</script>
<style>


</style>
