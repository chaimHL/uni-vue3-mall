<template>
	<view><web-view :src="link"></web-view></view>
</template>

<script setup>
// 路由传参可以通过 props 接收
defineProps({
	link: {
		type: String,
		default: ''
	}
})
</script>

<style lang="scss"></style>
