<template>
    <div class="dark">
        <div class="header">
            <el-dropdown v-for="s in sort" :key="s.id" class="dropdown">
                <span class="el-dropdown-link" hover="false">
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
import { reactive, ref, onMounted } from "vue";
import axios from "axios";



// 定義數據接口
interface Sort {
    id: number;
    name: string;
    type: string; // 新增 type 用於對應產品類型
}
interface Product {
    id: number;
    name: string;
    price: number;
    feature: string;
    img: string;
}

// 定義響應式數據
const sort = ref<Sort[]>([]);
const keyboard = ref<Product[]>([]);
const headphone = ref<Product[]>([]);
const mousePad = ref<Product[]>([]);
const mouse = ref<Product[]>([]);

// 產品數據映射
const productMap = ref({
    keyboard: keyboard.value,
    mouse: mouse.value,
    mousePad: mousePad.value,
    headphone: headphone.value,
});

// 加載數據
onMounted(async () => {
    try {
        const sortRes = await axios.get('/products/sort.json');
        const keyboardRes = await axios.get('/products/keyboard.json');
        const headphoneRes = await axios.get('/products/headphone.json');
        const mousePadRes = await axios.get('/products/mousePad.json');
        const mouseRes = await axios.get('/products/mouse.json');

        sort.value = sortRes.data;
        keyboard.value = keyboardRes.data;
        headphone.value = headphoneRes.data;
        mousePad.value = mousePadRes.data;
        mouse.value = mouseRes.data;

        // 更新 productMap
        productMap.value = {
            keyboard: keyboard.value,
            mouse: mouse.value,
            mousePad: mousePad.value,
            headphone: headphone.value,
        };

        console.log('載入成功:', sort.value, productMap.value);
    } catch (error) {
        console.error('載入失敗:', error);
    }
});

// 根據 type 返回對應的產品數據
const getItemsByType = (type: keyof typeof productMap.value) => {
    return productMap.value[type] || [];
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
    padding: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
}

.el-dropdown-link {
    :hover {
        color: none;
    }
}

.dropdown-menu {
    width: 60vw;
    margin: 0 20vw;
}

.el-tooltip__trigger {
    :hover {
        background-color: none;
        color: none;
    }
}
</style>