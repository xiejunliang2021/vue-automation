<template>
    <div class="stock-table-container">
      <el-skeleton :loading="loading" animated>
        <template #template>
          <el-skeleton-item v-for="i in 5" :key="i" style="margin-bottom: 10px" variant="rect" />
        </template>
  
        <el-table v-if="!loading" :data="tableData" style="width: 100%" border stripe>
          <el-table-column prop="symbol" label="股票代码" width="120" />
          <el-table-column prop="name" label="股票名称" width="120" />
          <el-table-column prop="industry" label="所属行业" width="150" />
          <el-table-column prop="market" label="上市板块" width="120" />
          <el-table-column prop="list_date" label="上市日期" width="120" />
          <el-table-column prop="area" label="地区" width="100" />
        </el-table>
      </el-skeleton>
  
      <el-pagination
        v-if="!loading"
        class="pagination"
        background
        layout="prev, pager, next, total, sizes"
        :total="total"
        :page-sizes="[10, 20, 50, 100]"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { PropType } from 'vue';
  
  const props = defineProps({
    loading: Boolean,
    tableData: { type: Array as PropType<any[]>, default: () => [] },
    total: { type: Number, default: 0 },
  });
  </script>
  