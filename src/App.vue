<template>
  <div>
    <tab-bar>
      <tab-bar-item>
        <div slot="icon"><img src="./assets/img/tabbar/home.svg" alt="" /></div>

        <p slot="text">首页</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./views/TabBar.vue";
import TabBarItem from "./views/TabBarItem.vue";

export default {
  name: "",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/reset.css";
</style>
