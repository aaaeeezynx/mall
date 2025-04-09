<template>
	<div class="child">
		<h3>子组件</h3>
		<h4>BTC:{{ btc }}</h4>
		<h4>SUI:{{ sui }}</h4>
		<h4>USDT:{{ usdt }}</h4>
		<button @click="getU($parent)">getUsdt</button>
	</div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'

const btc = ref(1)
const sui = ref(100)
const minus = ref(100)
const usdt = ref(0)

function getU(parent: any) {
	if (parent.usdt >= minus.value) {
		parent.usdt -= minus.value
		usdt.value += minus.value // 將減少的數值累加到 usdt
	} else {
		alert('USDT 不足以減少！')
	}
}
defineExpose({ btc, sui })
</script>

<style scoped>
.child {
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>
