import api from '@/api/index';

export const fetchStockData = async (page = 1, pageSize = 10) => {
  try {
    const response = await api.get('/stocks', { params: { page, pageSize } });
    return { data: response.data.items, total: response.data.total };
  } catch (error) {
    console.error('获取股票数据失败:', error);
    throw error;
  }
};
