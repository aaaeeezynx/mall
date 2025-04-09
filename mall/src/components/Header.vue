<template>
    <div class="dark">
        <div class="header">
            <el-dropdown v-for="s in sort" :key="s.id" class="dropdown">
                <span class="el-dropdown-link" hover="false">
                    {{ s.name }}
                </span>
                <template #dropdown>
                    <el-dropdown-menu class="dropdown-menu">
                        <el-dropdown-item class="dropdown-item" v-for="p in s.products" :key="p.id">
                            {{ p.name }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { reactive } from "vue";


const sort = reactive([
    {
        id: 1, name: "鍵盤",
        products: [
            { id: 1, name: "鍵盤1" },
            { id: 2, name: "鍵盤2" },
            { id: 3, name: "鍵盤3" },
            { id: 4, name: "鍵盤4" },
        ]
    },
    {
        id: 2, name: "滑鼠",
        products: [
            { id: 1, name: "滑鼠1" },
            { id: 2, name: "滑鼠2" },
            { id: 3, name: "滑鼠3" },
            { id: 4, name: "滑鼠4" },
        ]
    },
    {
        id: 3, name: "耳機",
        products: [
            { id: 1, name: "耳機1" },
            { id: 2, name: "耳機2" },
            { id: 3, name: "耳機3" },
            { id: 4, name: "耳機4" },
        ]
    },
    {
        id: 4, name: "滑鼠墊",
        products: [
            { id: 1, name: "滑鼠墊1" },
            { id: 2, name: "滑鼠墊2" },
            { id: 3, name: "滑鼠墊3" },
            { id: 4, name: "滑鼠墊4" },
        ]
    }
])

// const products = reactive()
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
</style>