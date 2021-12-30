<template>
  <div>
    <tab-bar>
      <tab-bar-item>
        <template v-slot:icon>
          <img src="./assets/img/tabbar/home.svg" alt="" />
        </template>

        <template v-slot:text>
          <p>首页</p>
        </template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:icon>
          <img src="./assets/img/tabbar/home.svg" alt="" />
        </template>

        <template v-slot:text>
          <p>首页</p>
        </template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:icon>
          <img src="./assets/img/tabbar/home.svg" alt="" />
        </template>

        <template v-slot:text>
          <p>首页</p>
        </template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:icon>
          <img src="./assets/img/tabbar/home.svg" alt="" />
        </template>

        <template v-slot:text>
          <p>首页</p>
        </template>
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
