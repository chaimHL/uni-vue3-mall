import qyRequest from './request.js'

export default {
	getMultidata() {
		return qyRequest.request({
			url: '/home/multidata'
		})
	},
	getData(data) {
		return qyRequest.request({
			url: '/home/data',
			data
		})
	}
}