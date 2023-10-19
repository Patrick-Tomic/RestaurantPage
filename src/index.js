import _ from 'lodash';
import './styles/main.scss';
import buildMain, {build} from './main.js'
import buildMenu, {menu} from './menu.js'
 const body = document.querySelector('#header');
const content = document.getElementById('content');
content.appendChild(buildMain());
const header = document.createElement('div');
header.classList.add('header');
const Menubtn = document.createElement('button');
Menubtn.innerHTML = "Menu";
Menubtn.classList.add('btn');
Menubtn.addEventListener('click',()=>{
    content.innerHTML = "";
    
    content.appendChild(buildMenu());
    body.appendChild(header);
});
header.appendChild(Menubtn);
const mainBtn = document.createElement('button');
mainBtn.innerHTML = "Main";
mainBtn.classList.add('btn');
mainBtn.addEventListener('click',()=>{
    content.innerHTML = "";
    body.appendChild(header);
    content.appendChild(buildMain());
    
});
header.appendChild(mainBtn);
body.appendChild(header);
