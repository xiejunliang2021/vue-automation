<template>
  <div class="stock_img" :class="{ 'mobile-view': isMobile }">
    <div class="stock_overlay">
      <div class="stock_table">
        <el-container class="layout-container-demo" style="height: 500px">
          <!-- 移动设备时的菜单控制 -->
          <template v-if="isMobile">
            <el-aside width="100%">
              <el-scrollbar>
                <el-menu :default-openeds="['1', '3']">
                  <!-- 原有菜单内容 -->
                   
                  <el-sub-menu index="1">
                    <template #title>
                      <el-icon><Histogram /></el-icon>熙烨量化
                      
                <div class="toolbar" >
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
                  <span>Tom</span>
                </div>
             
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
            <el-container>
              <el-main>
                <el-scrollbar>
                  <el-table :data="tableData">
                    <el-table-column prop="date" label="Date" width="140" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="address" label="Address" />
                  </el-table>
                </el-scrollbar>
              </el-main>
            </el-container>
              </el-scrollbar>
              
            </el-aside>

            
          </template>

          <!-- 非移动设备的原始布局 -->
          <template v-else>
            <el-aside width="20%">
              <el-scrollbar>
                <el-menu :default-openeds="['1', '3']">
                  <!-- 原有菜单内容 -->
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
              </el-scrollbar>
            </el-aside>

            <el-container>
              <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
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
                  <span>Tom</span>
                </div>
              </el-header>
              <div class="stock-table-container">
    <!-- 加载状态 -->
    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item 
          v-for="i in 5" 
          :key="i" 
          style="margin-bottom: 10px" 
          variant="rect" 
        />
      </template>

      <!-- 数据表格 -->
      <el-table 
        v-if="!loading"
        :data="tableData" 
        style="width: 100%"
        border
        stripe
      >
        <!-- 股票代码列 -->
        <el-table-column 
          prop="symbol" 
          label="股票代码" 
          width="120"
        />

        <!-- 股票名称列 -->
        <el-table-column 
          prop="name" 
          label="股票名称" 
          width="120"
        />

        <!-- 行业列 -->
        <el-table-column 
          prop="industry" 
          label="所属行业" 
          width="150"
        />

        <!-- 上市板块 -->
        <el-table-column 
          prop="market" 
          label="上市板块" 
          width="120"
        />

        <!-- 上市日期 -->
        <el-table-column 
          prop="list_date" 
          label="上市日期" 
          width="120"
        />

        <!-- 地区 -->
        <el-table-column 
          prop="area" 
          label="地区" 
          width="100"
        />
      </el-table>
    </el-skeleton>

    <!-- 分页组件 -->
    <el-pagination
      v-if="!loading"
      class="pagination"
      background
      layout="prev, pager, next, total, sizes"
      :total="totalStocks"
      :page-sizes="[10, 20, 50, 100]"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
              <!-- <el-main>
                <el-scrollbar>
                  <el-table :data= codeList>
                    <el-table-column prop="date" label="Date" width="140" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="symbol" label="Symbol" />
                  </el-table>
                </el-scrollbar>
              </el-main> -->
            </el-container>
          </template>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Histogram, Setting } from '@element-plus/icons-vue'
import {useStockStore} from "@/stores/counter"
import { ElMessage } from 'element-plus'
import api from '@/api/index'
import { StockBasic } from '@/types/stock'

// 定义股票数据接口
interface StockItem {
  code: string
  name: string
  currentPrice: number
  previousClose: number
  changeRate: number
}

const stockService = {
  async getStockBasicList(page = 1, pageSize = 10) {
    try {
      const response = await api.getCodeList(), {
        params: { page, pageSize }
      }
      return response.data
    } catch (error) {
      console.error('获取股票基本信息失败:', error)
      return []
    }
  }
}

// 响应式数据
const tableData = ref<StockBasic[]>([])
const loading = ref(true)
const totalStocks = ref(0)

// 数据加载
const fetchStockData = async () => {
  try {
    loading.value = true
    const data = await stockService.getStockBasicList()
    tableData.value = data
    totalStocks.value = data.length
  } catch (error) {
    ElMessage.error('数据加载失败')
  } finally {
    loading.value = false
  }
}

// 分页处理方法
const handleSizeChange = (size: number) => {
  console.log(`每页 ${size} 条`)
}

const handleCurrentChange = (page: number) => {
  console.log(`当前第 ${page} 页`)
}

// 组件挂载时获取数据
onMounted(() => {
  fetchStockData()
})

// 响应式变量
const isMobile = ref(false)

// 检查屏幕尺寸的函数
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 768 // 定义移动设备的屏幕宽度
}

onMounted(() => {
  // 初始检查屏幕尺寸
  checkScreenSize()
  // 添加窗口大小变化的监听器
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  // 移除事件监听器
  window.removeEventListener('resize', checkScreenSize)
})
</script>
  
  <style lang="scss" scoped>
    @use './stock.scss'
    
  </style>
  