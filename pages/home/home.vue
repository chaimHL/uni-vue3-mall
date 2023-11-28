<template>
	<view>
		<Banner :banners="banners" @bannerItemClick="onBannerItemClick" />
		<QyTab :list="['流行', '新款', '精选']" />
		<GoodsList :list="goodsData.pop.list[0]" />
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/home.js'

import Banner from './components/Banner'
import GoodsList from './components/GoodsList.vue'

const homeStore = useHomeStore()
const { banners, recommends, goodsData } = storeToRefs(homeStore)

onLoad(() => {
	// 获取首页数据：轮播图、推荐图
	homeStore.fetchHomeMultidata()
	// 获取列表数据
	homeStore.fetchHomeData({
		page: 1,
		type: 'pop'
	})
	homeStore.fetchHomeData({
		page: 1,
		type: 'new'
	})
	homeStore.fetchHomeData({
		page: 1,
		type: 'sell'
	})
})

// 点击 banner，跳转外链
function onBannerItemClick(link) {
	uni.navigateTo({
		url: '/pages/webview/webview?link=' + link
	})
}
</script>

<style lang="scss">
.text-area {
	color: $gPrimaryColor;
}
</style>
