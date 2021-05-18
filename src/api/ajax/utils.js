//工具函数
//把数据转化成json格式的字符串数据
const toJSON = data => {
 return JSON.stringify(data);
};
//把数据序列化成urlencoded形式的字符串
//'username=jay&age=18'
const serialize = (param) => {
	const result = [];
	for (const [key, value] of Object.entries(param)) {
		result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
	}
	//['username=jay','age=18']
	//把结果数组用‘&’连接成字符串
	return result.join('&');
};
//给url添加数据
const addURLData = (url, data) => {
	if (!data) return '';
	const mark = url.includes('?') ? '&' : '?';
	return mark + data;
};
export { serialize, addURLData, toJSON };
