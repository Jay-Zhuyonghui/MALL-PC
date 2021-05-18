const DEFAULTS={
 method:'GET',
 //请求头携带的数据
 params:null,
 // params:{
 //  username:'jay',
 //  age:18
 // }
 //username=jay&age=18
 //请求体携带的数据
 data:null,
 // data:{
 //  username:'jay',
 //  age:18
 // }
 //data:FormData类型数据
 contentType:'application/x-www-form-urlencoded',
 responseType:'text',
 timeoutTime:0,
 withCredentials:false,
 //方法
 success(){},
 httpCodeError(){},
 error(){},
 abort(){},
 timeout(){},
}
export default DEFAULTS;
