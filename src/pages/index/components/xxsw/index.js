import './xxsw.css'
import render from './items.art';
import { getData } from 'api/getData';
getData('https://www.imooc.com/api/mall-PC/index/seckill').then(data=>{
document.querySelector('.xxsw .bd').innerHTML=render({data}); 
console.log(render);
})