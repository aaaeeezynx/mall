<template>
    <div class="content">
        <h2>Coins</h2>
        <slot :coin="coins"></slot>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const coins = reactive([
    { id: '1', name: 'BTC', },
    { id: '2', name: 'ETH', },
    { id: '3', name: 'SOL', },
    { id: '4', name: 'BNB', }
])
</script>
<style scoped>
.content {
    padding: 10px;
    width: 300px;
    height: 200px;
    background-color: skyblue;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}

h2 {
    background-color: white;
    text-align: center;
}
</style>