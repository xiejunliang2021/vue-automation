<template>
    <el-menu :default-openeds="['1', '3']">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Histogram /></el-icon>熙烨量化
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">正在运行</el-menu-item>
          <el-menu-item index="1-2">已清仓</el-menu-item>
          <el-menu-item index="1-3">策略代码</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>收益统计</template>
            <el-menu-item index="1-4-1">当前收益</el-menu-item>
            <el-menu-item index="1-4-2">清仓收益</el-menu-item>
            <el-menu-item index="1-4-3">总收益</el-menu-item>
          </el-sub-menu>
        </el-menu-item-group>
      </el-sub-menu>
      <!-- 其他菜单项 -->
    </el-menu>
  </template>
  