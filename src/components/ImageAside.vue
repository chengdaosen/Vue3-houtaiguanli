<template>
  <el-aside width="220px" class="image-aside" v-loading="loading">
    <!-- <div class="top">
      <AsideList v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </AsideList>
    </div>
    <div class="bottom">分页区域</div> -->
  </el-aside>
</template>
<script setup>
import AsideList from './AsideList.vue'
import { reqGetImageClassList } from '@/api/image_class'
import { ref } from 'vue'
const list = ref([])
//加载动画
const loading = ref(false)
//获取数据
function getData() {
  loading.value = true
  reqGetImageClassList(1)
    .then((res) => {
      list.value = res.list
    })
    .finally(() => {
      loading.value = false
    })
}

getData()
</script>
<style>
.image-aside {
  position: relative;
  border-right: 1px solid #eee;
}
.image-aside .top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
}
.image-aside .bottom {
  position: absolute;
  bottom: 0;
  height: 50px;
  left: 0;
  right: 0;
  @apply flex items-center justify-center;
}
</style>
