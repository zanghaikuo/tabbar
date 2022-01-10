<template>
  <div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// 别名
import mainTabBar from '@/views/mainTabBar.vue'


export default {
  name: "",
  methods: {},
  components: {
    mainTabBar
    
  },
};
</script>

<style scoped>
/* 别名 */
@import "~@/assets/css/reset.css";
</style>
