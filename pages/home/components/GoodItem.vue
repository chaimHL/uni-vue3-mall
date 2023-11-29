<template>
	<view class="item">
		<image class="img" :src="good.show.img" mode="widthFix"></image>
	</view>
</template>

<script setup>
defineProps({
	good: {
		type: Object,
		default: () => ({})
	}
})
</script>

<style lang="scss">
.item {
	padding: 10rpx;
	.img {
		width: 100%;
		border-radius: 8rpx;
	}
}
</style>
