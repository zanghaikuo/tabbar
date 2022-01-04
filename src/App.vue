<template>
  <div>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from './views/mainTabBar.vue'


export default {
  name: "",
  methods: {},
  components: {
    mainTabBar
    
  },
};
</script>

<style>
@import "./assets/css/reset.css";
</style>
