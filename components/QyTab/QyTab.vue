<template>
	<view class="content">
		<view
			v-for="(item, index) in list"
			:key="item"
			class="item"
			@click="handleClickItem(index)"
		>
			<text class="text" :class="[activeIndex === index ? 'active' : '']">
				{{ item }}
			</text>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
	list: {
		type: Array,
		default: () => []
	}
})

const activeIndex = ref(0)
function handleClickItem(index) {
	activeIndex.value = index
}
</script>

<style lang="scss">
.content {
	@include flex-normal();
	padding: 40rpx 30rpx;
	.item {
		flex: 1;
		text-align: center;
		.text {
			display: inline-block;
			padding: 10rpx 30rpx;
			border-bottom: 4rpx solid transparent;
		}
		.active {
			color: $gPrimaryColor;
			border-color: $gPrimaryColor;
		}
	}
}
</style>
