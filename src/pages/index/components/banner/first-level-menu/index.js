import './fmenu.css'
import {getData} from 'api/getData'
import render from './fmenu.art'
import render_1 from './fmenu_1.art'
getData('https://www.imooc.com/api/mall-PC/index/menu').then(data=>{
 const fmenu=document.getElementById('fmenu');
 fmenu.innerHTML=render({
  items:data
 });
}).then(()=>{
 // 垂直菜单的实现
(function () {
	// 得到所有菜单触碰项li标签
	var menu_lis = document.querySelectorAll('#v-menu li[data-n]');
	// 得到vmenubox盒子
	var vmenubox = document.querySelector('#v-menu-box');
	// 得到所有menu菜单
	var menus = document.querySelectorAll('#menus .menu');

	// 批量添加监听
	for (var i = 0; i < menu_lis.length; i++) {
		(function (i) {
			// 鼠标触碰某个菜单项
			menu_lis[i].onmouseenter = function () {
				// 所有菜单项去掉active类
				for (var j = 0; j < menus.length; j++) {
					menu_lis[j].className = '';
				}
				// 自己加active类
				this.className = 'active';
				// 让所有菜单隐藏，去掉active类
				for (var j = 0; j < menus.length; j++) {
					menus[j].className = 'menu';
				}
				// 让序号相同的菜单项添加menu类
				menus[i].className = 'menu active';
			};
		})(i);
	}
	// 鼠标离开整个vmenubox盒子
	vmenubox.onmouseleave = function () {
		// 让所有菜单隐藏
		for (var j = 0; j < menus.length; j++) {
			menus[j].className = 'menu';
		}
		// 所有菜单项去掉active类
		for (var j = 0; j < menus.length; j++) {
			menu_lis[j].className = '';
		}
	};
})();
})
