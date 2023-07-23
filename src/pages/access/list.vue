<template>
  <el-card shadow="never" class="border-0">
    <ListHeader @refresh="getData" />
    <el-tree
      :data="tableData"
      :props="{ label: 'name', children: 'child' }"
      v-loading="loading"
      node-key="id"
      :default-expanded-keys="defaultExpandedKeys"
    />
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
import ListHeader from '@/components/ListHeader.vue'
import { getRuleList } from '@/api/rule.js'
import { useInitTable } from '@/composables/useCommon.js'
const defaultExpandedKeys = ref([])
const { tableData, loading, getData } = useInitTable({
  getList: getRuleList,
  onGetListSuccess: (res) => {
    tableData.value = res.list
    defaultExpandedKeys.value = res.list.map((o) => o.id)
    console.log(res)
  },
})
</script>
