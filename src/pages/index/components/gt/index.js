import './gt.css'
import render from '../zsj/items.art';
import { getData } from 'api/getData';
getData('https://www.imooc.com/api/mall-PC/index/group_tour').then(data=>{
document.querySelector('.gt .bd').innerHTML=render(data); 

})