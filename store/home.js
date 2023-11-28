import {
	defineStore
} from 'pinia'
import homeApi from '@/service/home.js'


export const goodsType = ['pop', 'new', 'sell']
// 生成默认的 goodsData
function getDefaultGoodsData() {
	const obj = {}
	goodsType.forEach(item => {
		obj[item] = {
			page: 0,
			list: []
		}
	})
	return obj
}

export const useHomeStore = defineStore('home', {
	state() {
		return {
			banners: [],
			recommends: [],
			goodsData: getDefaultGoodsData()
		}
	},
	actions: {
		async fetchHomeMultidata() {
			const res = await homeApi.getMultidata()
			this.banners = res?.data?.banner?.list || []
			this.recommends = res?.data?.recommend?.list || []
		},

		async fetchHomeData(data) {
			const res = await homeApi.getData(data)
			this.goodsData[data.type].list.push(res.data.list)
			this.goodsData[data.type].page = res.data.page
		}
	}
})