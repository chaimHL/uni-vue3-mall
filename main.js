import App from './App'
// #ifdef H5
// 图片懒加载，微信小程序只需要在 <image> 添加 :lazy-load="true" 即可
import lazyPlugin from 'vue3-lazy'
// #endif
// uniapp 内置了 pinia，无需额外 npm 安装
import * as Pinia from 'pinia'

import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	// #ifdef H5
	app.use(lazyPlugin, {
		loading: './static/logo.png',
		error: './static/logo.png'
	})
	// #endif
	return {
		app,
		Pinia
	}
}