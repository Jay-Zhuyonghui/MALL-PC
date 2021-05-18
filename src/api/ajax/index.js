import Ajax from './Ajax.js';
const ajax = (url, options) => {
	// return new Ajax(url, options).getXHR();
 let xhr;
	const p = new Promise((resolve, reject) => {
		xhr = new Ajax(url, {
			...options,
			...{
				success(response) {
					resolve(response);
				},
				httpCodeError(status) {
					reject({
						type: 'HTTP-CODE-ERROR',
						text: `错误码${status}`,
					});
				},
				error() {
					reject({
						type: 'HTTP-RESPONSE-ERROR',
						text: '请求错误',
					});
				},
				abort() {
					reject({
						type: 'ABORT-ERROR',
						text: '请求被终止',
					});
				},
				timeout() {
					reject({
						type: 'TIMEOUT-ERROR',
						text: '超时错误',
					});
				},
			},
		}).getXHR();
	});
 p.xhr=xhr;
	return p;
};
const get = (url, options) => {
	return ajax(url, { ...options, method: 'GET' });
};
const getJSON = (url, options) => {
	return ajax(url, {
		...options,
		method: 'GET',
		responseType: 'json',
	});
};
const post = (url, options) => {
	return ajax(url, { ...options, method: 'POST' });
};
export { ajax, get, getJSON, post };
