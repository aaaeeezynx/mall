// src/store/products.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

// Define or import the Product type
type Sort = {
  id: number;
  name: string;
  type: string;
};
type Product = {
  id: number;
  name: string;
  price: number;
  feature: string;
  image: string;
};

export const useProductStore = defineStore('products', () => {
  const sort = ref<Sort[]>([]);
  const productMap = ref({
    keyboard: [] as Product[],
    mouse: [] as Product[],
    mousePad: [] as Product[],
    headphone: [] as Product[],
  });

  const loadData = async () => {
    try {
      const sortRes = await axios.get('/products/sort.json');
      const keyboardRes = await axios.get('/products/keyboard.json');
      const headphoneRes = await axios.get('/products/headphone.json');
      const mousePadRes = await axios.get('/products/mousePad.json');
      const mouseRes = await axios.get('/products/mouse.json');

      sort.value = sortRes.data;
      productMap.value.keyboard = keyboardRes.data;
      productMap.value.mouse = mouseRes.data;
      productMap.value.mousePad = mousePadRes.data;
      productMap.value.headphone = headphoneRes.data;
    } catch (error) {
      console.error('載入失敗:', error);
    }
  };

  return { sort, productMap, loadData };
});