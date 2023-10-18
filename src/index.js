import _ from 'lodash';
import './styles/main.scss';
import Logo from './flag.png'

function build(){
    const elements = document.createElement('div');
   const head = document.createElement('h2');
   const img = document.createElement('img');
   head.innerHTML = "Pat's Bosnian American fusion";
   elements.appendChild(head);
    img.setAttribute('id','logo');
    img.src = Logo;
    
    elements.appendChild(img);
    return elements;
}
const content = document.querySelector('#content');
content.appendChild(build());