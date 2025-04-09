<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<Child  />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'

const car =ref('banz')

</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>