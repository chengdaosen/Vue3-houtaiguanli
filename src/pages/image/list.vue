<template>
  <el-container class="bg-white rounded" :style="{ height: h + 'px' }">
    <el-header class="image-header">
      <el-button type="primary" size="small" @click="handleOpenCreate"
        >新增图片分类</el-button
      >
      <el-button type="warning" size="small" @click="handleOpenUpload"
        >上传图片</el-button
      >
    </el-header>
    <el-container
      ><ImageAside ref="ImageAsideRef" @change="handleAsideChange" /><ImageMain
        ref="imageMainRef"
    /></el-container>
  </el-container>
</template>
<script setup>
import ImageAside from '../../components/ImageAside.vue'
import ImageMain from '../../components/ImageMain.vue'
import { ref } from 'vue'
const ImageAsideRef = ref(null)
const handleOpenCreate = () => ImageAsideRef.value.handleCreate()
const windowHeight = window.innerHeight || document.body.clientHeight //拿到浏览器可视区域高度
const h = windowHeight - 64 - 44 - 40 //padding有40
const imageMainRef = ref(null)
const handleAsideChange = (imageClassId) =>
  imageMainRef.value.loadData(imageClassId)
const handleOpenUpload = () => {
  imageMainRef.value.openUploadFile()
}
</script>
<style>
.image-header {
  border-bottom: 1px solid #eee;
  @apply flex items-center;
}
</style>
