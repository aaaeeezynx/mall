<!-- src/views/ProductList.vue -->
<template>
    <div class="product-list">
        <h2>{{ categoryName }} 商品列表</h2>
        <div class="product-grid">
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/products";
import ProductCard from "../components/ProductCard.vue";

const route = useRoute();
const type = route.params.type as "keyboard" | "mouse" | "mousePad" | "headphone";
const store = useProductStore();

const products = computed(() =>
    (store.productMap[type] || []).map(product => ({
        ...product,
        img: product.image,
    }))
);
const categoryName = computed(() => {
    const categoryMap = {
        keyboard: "鍵盤",
        mouse: "滑鼠",
        mousePad: "滑鼠墊",
        headphone: "耳機",
    };
    return categoryMap[type] || "未知分類";
});

onMounted(() => {
    if (!store.productMap[type].length) store.loadData();
});
</script>

<style scoped>
.product-list {
    padding: 20px;
}
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}
</style>