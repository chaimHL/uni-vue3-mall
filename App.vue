<script>
import routerInterceptor from '@/router-interceptor.js'
export default {
	onLaunch: function() {
		console.log('App Launch')
		// 路由拦截
		routerInterceptor()
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style>
/*每个页面公共css */
</style>
