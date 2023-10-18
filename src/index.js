import _ from 'lodash';
import './styles/main.scss';
import buildMain, {build} from './main.js'
import buildMenu, {menu} from './menu.js'

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
    content.appendChild(header);
});
header.appendChild(Menubtn);
const mainBtn = document.createElement('button');
mainBtn.innerHTML = "Main";
mainBtn.classList.add('btn');
mainBtn.addEventListener('click',()=>{
    content.innerHTML = "";
    
    content.appendChild(buildMain());
    content.appendChild(header);
});
header.appendChild(mainBtn);
content.appendChild(header);
