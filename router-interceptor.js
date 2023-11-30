export const whiteList = ['/', '/pages/home/home', '/pages/webview/webview', '/pages/login/login']

export default function() {
	// 这个拦截方法只适用于以下 4 种 api 产生的页面跳转，如果是按返回按钮跳转或直接浏览器地址栏输入跳转则无需，建议每个页面另外单独设置判断
	const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']

	list.forEach(item => {
		uni.addInterceptor(item, {
			invoke(args) {
				console.log(args)
				const url = args.url.split('?')[0] // 获取跳转目标页面
				if (!whiteList.includes(url)) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return false // 阻止原本的跳转
				}
			}
		})
	})

}