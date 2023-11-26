import qyRequest from './request.js'

export default {
	getMultidata() {
		return qyRequest.request({
			url: '/home/multidata'
		})
	}
}