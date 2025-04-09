<template>
    <div class="header">
        H E A D E R
        <el-dropdown placement="bottom" v-for="p in products" :key="p.id">
            <el-button> {{ p.id }} </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="p in products" :key="p.id">
                        {{ p.name }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { reactive } from "vue";

const products = reactive([
    { name: "产品1", id: 1 },
    { name: "产品2", id: 2 },
    { name: "产品3", id: 3 },
    { name: "产品4", id: 4 },
    { name: "产品5", id: 5 },
    { name: "产品6", id: 6 },
])
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>