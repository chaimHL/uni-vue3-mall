<template>
	<view><view class="text-area">111</view></view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import homeApi from '@/service/home.js'

onLoad(() => {
	homeApi.getMultidata().then(res => {
		console.log(res)
	})
})
</script>

<style lang="scss">
.text-area {
	color: $gPrimaryColor;
}
</style>
