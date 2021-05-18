import './ads.css';
import render from './ads.art';
import { getData } from 'api/getData';
getData('https://www.imooc.com/api/mall-PC/index/ad').then((data) => {
	document.querySelector('.fav-ad').innerHTML = render({
		data,
	});
});
