import App from './App'
// uniapp 内置了 pinia，无需额外 npm 安装
import * as Pinia from 'pinia'

import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia
	}
}