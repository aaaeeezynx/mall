<template>
    <div class="header">
        <ul>
            <li v-for="s in store.product" :key="s.id">
                <router-link :to="{ name: 'Product', params: { type: s.type } }">
                    {{ s.product }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useProductStore } from '../stores/Product'

const store = useProductStore()
onMounted(() => store.getProduct())


// // 定義數據接口
// interface Sort {
//     id: number
//     product: string
//     type: string
// }

// const sort = ref<Sort[]>([])

// onMounted(async () => {
//     try {
//         const sortRes = await axios.get('/products.json')
//         sort.value = sortRes.data
//         console.log('載入成功:', sort.value)
//     } catch (error) {
//         console.error('載入失敗:', error)
//     }
// })
</script>

<style lang="scss" scoped></style>