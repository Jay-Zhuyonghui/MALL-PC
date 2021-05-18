//工具函数
import { serialize, addURLData, toJSON } from './utils.js';
//默认参数
import DEFAULTS from './defaults.js';
//Ajax类
class Ajax {
	constructor(url, options) {
		this.url = url;
		this.options = Object.assign({}, DEFAULTS, options);
		//初始化
		this.init();
	}
	//初始化方法
	init() {
		const xhr = new XMLHttpRequest();
		this.xhr = xhr;
		//绑定响应事件处理程序
		this.bentEvents();
		xhr.open(this.options.method, this.url + this.addParams(), true);
		//设置responseType
		this.setresponseType();
		//设置超时
		this.setTimeout();
		//设置跨域是否携带Cookie
		this.setwithCredentials();
		//发送请求
		this.sendData();
	}
	//绑定响应事件处理程序
	bentEvents() {
		const { success, httpCodeErro, error, abort, timeout } = this.options;
		const xhr = this.xhr;
		xhr.onload = () => {
			if (xhr.readyState != 4) return;
			if (this.ok()) {
				success(xhr.response, xhr);
			} else {
				httpCodeErro(xhr.status, xhr);
			}
		};
		xhr.onerror = () => {
			error(xhr);
		};
		xhr.onabort = () => {
			abort(xhr);
		};
		xhr.ontimeout = () => {
			timeout(xhr);
		};
	}
	//检查http状态码是否正常
	ok() {
		const xhr = this.xhr;
		return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
	}
	//添加请求头数据
	addParams() {
		const { params } = this.options;
		if (!params) {
			return '';
		}
		return addURLData(this.url, serialize(params));
	}
	//设置responseType
	setresponseType() {
		this.xhr.responseType = this.options.responseType;
	}
	//设置超时
	setTimeout() {
		if (this.options.timeoutTime > 0) {
			this.xhr.timeout = this.options.timeoutTime;
		}
	}
	//设置跨域是否携带Cookie
	setwithCredentials() {
		if (this.options.withCredentials) {
			this.xhr.withCredentials = true;
		}
	}
	//发送请求
	sendData() {
		const xhr = this.xhr;
		const { data, contentType } = this.options;
		if (this.isSendData()) {
			return xhr.send(null);
		}
		let resultData = null;
		if (this.isFormData()) {
   //发送FormData格式的数据
			resultData = data;
		} else if (this.isFormURLEncodedData()) {
   //发送application/x-www-form-urlencoded格式的数据
			resultData = serialize(data);
			//设置contentType
		} else if (this.isJSONData()) {
   //发送JSON格式的数据
			resultData = toJSON(data);
		}else{
   //发送其他格式的数据
   resultData=data;
  }
  this.setContenType();
		xhr.send(resultData);
	}
	//判断是否需要通过send（请求体）携带数据
	isSendData() {
		const { data, method } = this.options;
		return !data || method.toLowerCase() === 'get';
	}
	//判断是否发送FormData类型的数据
	isFormData() {
		return this.options.data instanceof FormData;
	}
	//判断是否发送x-www-form-urlencoded类型的数据
	isFormURLEncodedData() {
		return this.options.contentType
			.toLowerCase()
			.includes('application/x-www-form-urlencoded');
	}
	//判断是否发送json类型的数据
	isJSONData() {
		return this.options.contentType
			.toLowerCase()
			.includes('application/json');
	}
 //设置contentType
 setContenType(){
  if(!(this.options.contentType))return;
  this.xhr.setRequestHeader('Content-Type',this.options.contentType);
 }
 //获取XHR对象
 getXHR(){
  return this.xhr;
 }
}
export default Ajax;
