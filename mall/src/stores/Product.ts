import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  const product = ref<Product[]>([])

  interface Content {
    id?: number
    name?: string
    price?: number
    feature?: []
    img?: string
  }

  interface Product {
    id: number
    product: string
    type: string
    content?: Content
  }

  async function getProduct() {
    try {
      const response = await axios.get('/products.json')
      product.value = response.data
    } catch (error) {
      console.error('Failed to load products:', error)
    }
  }
  return { getProduct, product }
})
