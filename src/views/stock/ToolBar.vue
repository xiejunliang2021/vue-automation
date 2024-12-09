<template>
    <div class="toolbar">
      <!-- 设置按钮 -->
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <setting />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
  
      <!-- 用户信息 -->
      <span>{{ username }}</span>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { Setting } from '@element-plus/icons-vue';
  
  // 用户名（可以替换为实际的用户状态）
  const username = ref('Tom');
  </script>
  
  <style scoped>
  .toolbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    font-size: 14px;
  }
  </style>
  