<template>
	<view>
		<Banner :banners="banners" @bannerItemClick="onBannerItemClick" />
		<QyTab :list="['流行', '新款', '精选']" @clickTab="onClickTab" />
		<GoodsList :list="goodsData[currentType].list" />
	</view>
</template>

<script setup>
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import { storeToRefs } from 'pinia'
import { useHomeStore, goodsType } from '@/store/home.js'

import Banner from './components/Banner'
import GoodsList from './components/GoodsList.vue'

const homeStore = useHomeStore()
const { banners, recommends, goodsData, currentType } = storeToRefs(homeStore)

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

// 滑动到底部加载更多商品数据
onReachBottom(() => {
	homeStore.fetchHomeData({
		page: goodsData.value[currentType.value].page + 1,
		type: currentType.value
	})
})

// 点击 banner，跳转外链
function onBannerItemClick(link) {
	uni.navigateTo({
		url: '/pages/webview/webview?link=' + link
	})
}

// 点击 tab
function onClickTab(index) {
	homeStore.setCurrentType(goodsType[index])
}
</script>

<style lang="scss">
.text-area {
	color: $gPrimaryColor;
}
</style>
