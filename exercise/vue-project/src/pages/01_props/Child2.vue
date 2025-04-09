<template>
	<div class="child">
		<h3>子组件</h3>
		<h4>BTC:{{ btc }}</h4>
		<h4>Alt:{{ apt }}</h4>
		<h4>USDC{{ usdc }}</h4>
		<h4>a{{ car.brand }},price{{ car.price }}</h4>
		<button @click="updateusdc(10)">changeUSDC</button>
	</div>
</template>

<script setup lang="ts" name="Child2">
import { inject, ref } from 'vue'

const btc = ref(1)
const apt = ref('apt')

defineExpose({ btc, apt })

const {usdc,updateusdc} = inject('usdc',{usdc:ref(),updateusdc:(x:number)=>{}})
const car = inject('car', {
	brand: 'unknow',
	price: 0
})
</script>

<style scoped>
.child {
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>
