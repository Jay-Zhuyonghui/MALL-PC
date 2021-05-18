import './ddwl.css'
import render from './items.art';
import { getData } from 'api/getData';
getData('https://www.imooc.com/api/mall-PC/index/local_fun').then(data=>{
document.querySelector('.ddwl .bd').innerHTML=render(data); 
})