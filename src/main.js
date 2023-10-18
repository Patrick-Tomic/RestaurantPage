import Logo from './imgs/flag.png'
export default function build(){
    const content = document.querySelector('#content');
   
        
            const elements = document.createElement('div');
            elements.classList.add('header');
            const head = document.createElement('h2');
            const img = document.createElement('img');
                head.innerHTML = "Pat's Bosnian American fusion";
                    img.setAttribute('id','logo');
                    img.src = Logo;
                
                 
                
                elements.appendChild(head);
                 elements.appendChild(img);
                

            return elements;
    }
    
  