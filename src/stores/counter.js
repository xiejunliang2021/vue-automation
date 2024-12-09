import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// defineStore里面的stock是分类，id
export const useStockStore = defineStore('stock', {
  // 真正存储数据的地方
  state(){
    return {codeList: [
      {
      name: '中国中冶',
      code: '601618',
      currentPrice: 3.68,
      previousClose: 5.69,
      changeRate:6.96
    },
    {
      name: '中国交建',
      code: '601619',
      currentPrice: 3.68,
      previousClose: 5.69,
      changeRate:6.96
    },
  ]
  }
}
})






