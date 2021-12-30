<template>
  <div class="tab-bar-item">
    
    
      <slot name="icon"></slot>
    <slot name="text"></slot>
    
      
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
img {
  width: 24px;
  
}
</style>
