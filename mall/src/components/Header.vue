<template>
    <div class="dark">
        <div class="header">
            <el-dropdown v-for="s in sort" :key="s.id" class="dropdown">
                <span class="el-dropdown-link" @click="goToProductList(s.type)">
                    {{ s.name }}
                </span>
                <template #dropdown>
                    <el-dropdown-menu class="dropdown-menu">
                        <el-dropdown-item class="dropdown-item"
                            v-for="item in getItemsByType(s.type as 'keyboard' | 'mouse' | 'mousePad' | 'headphone')"
                            :key="item.id">
                            {{ item.name }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from '../stores/products';

const router = useRouter()
const store = useProductStore();
const sort = store.sort;
const productMap = store.productMap;

onMounted(() => {
    store.loadData();
});

const getItemsByType = (type: keyof typeof productMap) => {
    return productMap[type] || [];
};

const goToProductList = (type: string) => {
    router.push({ name: 'ProductList', params: { type } });
    console.log('導航到產品列表:', type);
};
</script>

<style lang="scss" scoped>
.header {
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
}

.dropdown {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
}

.dropdown-menu {
    width: 60vw;
    margin: 0 20vw;
}

/* 移除 el-dropdown-link 的 hover 效果 */
:deep(.el-dropdown-link) {
    color: #d7d4d4;
    /* 自訂顏色 */
    padding: 8px;
}

:deep(.el-dropdown-link:hover) {
    background-color: transparent;
    /* 移除背景變化 */
    border: none;
    /* 移除邊框 */
    color: #666;
    /* hover 時的文字顏色 */
}

/* 修改下拉菜單的外觀 */
:deep(.el-dropdown-menu) {
    background-color: #333;
    /* 自訂背景色，例如深灰色 */
    border: 1px solid #555;
    /* 自訂邊框顏色 */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    /* 自訂陰影 */
}

/* 移除下拉菜單項的 hover 白色效果 */
:deep(.el-dropdown-menu__item:hover) {
    background-color: #444;
    /* hover 時的背景色 */
    color: #fff;
    /* hover 時的文字顏色 */
    border: none;
    /* 移除邊框 */
}
</style>