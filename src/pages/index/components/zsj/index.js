import './zsj.css'
import render from './items.art';
import { getData } from 'api/getData';
getData('https://www.imooc.com/api/mall-PC/index/special_subject').then(data=>{
document.querySelector('.zsj .bd').innerHTML=render(data); 
})