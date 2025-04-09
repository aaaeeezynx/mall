<template>
	<div>
		<input type="text"
		:value="user"
		@input="emit('update:user',(<HTMLInputElement>$event.target).value)"
		>
	</div>
</template>
<script setup lang="ts" name="userNameInput">

defineProps(['user'])
const emit =defineEmits(['update:user'])

</script>
<style>
	
</style>