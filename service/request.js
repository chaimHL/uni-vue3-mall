const TIME_OUT = 100000
// const BASE_URL = 'https://mock.apifox.cn/m1/2917397-0-default'
const BASE_URL = 'http://123.207.32.32:7888/api/hy66'

class QYRequest {
	request(reqPayload) {
		return new Promise((resolve, reject) => {
			uni.request({
				...reqPayload,
				url: BASE_URL + reqPayload.url,
				method: reqPayload.method || 'GET',
				timeout: TIME_OUT,
				success(res) {
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
}

export default new QYRequest()