<template>
	<div class="father">
		<Content />
	</div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import Content from './Content.vue'

</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
	display: flex;
	justify-content: space-evenly;
}

img {
	width: 100%;
	height: 50%;
}
</style>