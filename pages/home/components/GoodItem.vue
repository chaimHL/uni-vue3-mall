<template>
	<view class="item" @click="handleClickItem">
		<!-- #ifdef H5 -->
		<img class="img" v-lazy="good.show.img" />
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<image
			class="img"
			:src="good.show.img"
			:lazy-load="true"
			mode="widthFix"
		></image>
		<!-- #endif -->
	</view>
</template>

<script setup>
defineProps({
	good: {
		type: Object,
		default: () => ({})
	}
})

function handleClickItem() {
	uni.navigateTo({
		url: '/pages/detail/detail'
	})
}
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
