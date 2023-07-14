<template>
  <el-card shadow="never" class="border-0">
    <!-- 新增|刷新 -->
    <div class="flex item-center justify-between mb-4">
      <el-button type="primary" size="small">新增</el-button>
      <el-tooltip effect="dark" content="刷新数据" placement="top-end">
        <el-button text
          ><el-icon :size="20"><RefreshRight /></el-icon
        ></el-button>
      </el-tooltip>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="title" label="公告标题" />
      <el-table-column prop="create_time" label="发布时间" width="380" />
      <el-table-column prop="address" label="操作" width="180" align="center">
        <template #default="scope">
          <el-button type="primary" size="small" text>修改</el-button>
          <el-popconfirm
            title="是否删除该公告"
            confirm-button-text="确认"
            cancel-button-text="取消"
            @confirm="handleDelete(scope.row.id)"
          >
            <template #reference>
              <el-button text type="primary" size="small"> 删除 </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const tableData = ref([])
function getData() {
  tableData.value = [
    {
      id: 13,
      title: 'nip',
      content: 'nip\n',
      order: 0,
      create_time: '2022-06-06 14:40:11',
      update_time: '2022-06-06 14:40:11',
    },
  ]
}
getData()
//删除
const handleDelete = (id) => {}
</script>
