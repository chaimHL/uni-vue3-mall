<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000">
		<swiper-item
			v-for="(item, index) in banners"
			:key="index"
			@click="handleClickBanner(item)"
		>
			<view class="swiper-item">
				<image
					:src="item.image"
					:lazy-load="true"
					mode="widthFix"
					class="img"
				></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script setup>
defineProps({
	banners: {
		type: Array,
		default: () => []
	}
})
const emits = defineEmits(['bannerItemClick'])
function handleClickBanner(item) {
	emits('bannerItemClick', item.link)
}
</script>

<style lang="scss">
.swiper-item {
	.img {
		width: 100%;
	}
}
</style>
