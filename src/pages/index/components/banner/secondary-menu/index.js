import render from './menu/menu.art';
import { getData } from 'api/getData';
const menu = document.querySelectorAll('.menu');
const url=['https://www.imooc.com/api/mall-PC/index/menu/hot','https://www.imooc.com/api/mall-PC/index/menu/hk','https://www.imooc.com/api/mall-PC/index/menu/japan ','https://www.imooc.com/api/mall-PC/index/menu/asia ','https://www.imooc.com/api/mall-PC/index/menu/eu ','https://www.imooc.com/api/mall-PC/index/menu/au '];
for(let i=0;i<url.length;i++){
 getData(url[i]).then((data) => {
  menu[i].innerHTML = render({
   data,
  });
 });
}