<template>
  <div class="tab-bar-item" @click="btn">
    <!-- 插槽都需要包装一层div，要不然属性会被替换 -->
    <slot name="icon" v-if="!isShow"></slot>
    <slot name="icon-active" v-else></slot>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isShow ? { color: this.activeColor } : {};
    },
  },
  methods: {
    btn() {
      this.$router.push(this.path);
    },
  },
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "orange",
    },
  },
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
}
/* .red {
  color: #ff5777;
} */
</style>
