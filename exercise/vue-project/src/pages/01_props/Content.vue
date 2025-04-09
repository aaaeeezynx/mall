<template>
    <div class="content">
        <h2>child</h2>
    </div>
</template>

<script setup lang="ts" name="Content">
import { ref } from 'vue'
import axios from 'axios';

let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
console.log(content)

</script>

<style scoped>
.content {
    padding: 10px;
    width: 100%;
    height: 200px;
    background-color: skyblue;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>
