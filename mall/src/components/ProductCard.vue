<!-- src/components/ProductCard.vue -->
<template>
    <div class="product-card">
        <img :src="product.img" alt="商品圖片" class="product-img" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.feature }}</p>
        <p class="price">價格: ${{ product.price }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    product: {
        id: number;
        name: string;
        price: number;
        feature: string;
        img: string;
    };
}>();
</script>

<style scoped>
.product-card {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
}
.product-img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
}
.price {
    color: #e74c3c;
    font-weight: bold;
}
</style>