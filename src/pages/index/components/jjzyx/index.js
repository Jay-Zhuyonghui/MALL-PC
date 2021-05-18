import render from './items.art';
import { getData } from 'api/getData';
getData('https://www.fastmock.site/mock/3401869bd4dfa913f24d163f4f6ddc9d/api/jjzyx').then(data=>{
document.querySelector('.jjzyx .bd').innerHTML=render(data); 
})