import { getJSON } from './ajax';

const getData = (url, options) => {
	return getJSON(url, {
		timeoutTime: 15000,
		...options,
	})
		.then((response) => {
			if (response.code !== 200) {
				throw new Error(`出错了，状态码：${response.code}`);
			}
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};
export { getData };
