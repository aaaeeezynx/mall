<template>
    <div>
        <h1>products Detail</h1>
        <div v-if="product">
            <h2>{{ product.product }}</h2>
            <p>{{ product.type }}</p>
        </div>
        <p v-else>Loading...</p>
        <router-link to="/">Back to Home</router-link>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '../stores/Product'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'

const store = useProductStore()
const route = useRoute()

onMounted(() => {
    if (!store.product.length) store.getProduct()
})

const product = computed(() =>
    store.product.find((p) => p.type === route.params.type)
)
</script>


<style lang="scss" scoped>
.body {
    background-color: red;
}
</style>