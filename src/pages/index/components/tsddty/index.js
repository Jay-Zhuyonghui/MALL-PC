import './tsddty.css'
import render from './items.art';
import { getData } from 'api/getData';
getData('https://www.imooc.com/api/mall-PC/index/local_exp').then(data=>{
document.querySelector('.tsddty .bd').innerHTML=render({data}); 
})