<template>
  <el-container class="bg-white rounded" :style="{ height: h + 'px' }">
    <el-header class="image-header">Header</el-header>
    <el-container><ImageAside /><ImageMain /></el-container>
  </el-container>
</template>
<script setup>
import ImageAside from '../../components/ImageAside.vue'
import ImageMain from '../../components/ImageMain.vue'
const windowHeight = window.innerHeight || document.body.clientHeight //拿到浏览器可视区域高度
const h = windowHeight - 64 - 44 - 40 //padding有40
</script>
<style>
.image-header {
  border-bottom: 1px solid #eee;
  @apply flex items-center;
}
</style>
