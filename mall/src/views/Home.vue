<template>
    <div class="block text-center">
        <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 text="2xl">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.el-carousel {
    width: 100%;
    height: 100vh;
}s
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>