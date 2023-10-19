import pita from './imgs/pita.jpeg';
import cevapi from './imgs/cevapi.jpg';
import cabbage from './imgs/cabbage.jpeg';
import coffee from './imgs/coffee.jpg';
import rakija from './imgs/rakija.jpeg';
  export default function menu(){
    
    const elements = document.createElement('div');
    const food = document.createElement('h1');
    food.innerHTML="Entrees ";
    elements.appendChild(food);
    let count = 0;
    while(count<6){
        const entree = document.createElement('div');
        entree.classList.add('entree');
        if(count ==0){
            const head = document.createElement('h3');
            head.innerHTML = "Pita";
            entree.appendChild(head);
            const p = document.createElement('p');
            p.innerHTML = "Balkan homemade phyllo dough filled with cheese/ soubacg & cheese";
            const img = document.createElement('img');
            img.src = pita;
            img.classList.add('img');
            entree.appendChild(img);
            entree.appendChild(p);
        }
        if(count ==1){
            const head = document.createElement('h3');
            head.innerHTML = "Cevapi";
            entree.appendChild(head);
            const p = document.createElement('p');
            p.innerHTML = "Balkan beef sausages served in freshly baked pita bread, kajmak, ajvar and onion  ";
            const img = document.createElement('img');
            img.src = cevapi;
            img.classList.add('img');
            entree.appendChild(img);
            entree.appendChild(p);
        }
        if(count ==3){
            const head = document.createElement('h3');
            head.innerHTML = "Stuffed Cabbage rolls";
            entree.appendChild(head);
            const p = document.createElement('p');
            p.innerHTML = "leaves of pickled cabbage with beef and rice seasoned inside ";
            const img = document.createElement('img');
            img.src = cabbage;
            img.classList.add('img');
            entree.appendChild(img);
            entree.appendChild(p);
        }
        if(count ==4){
            const drinks = document.createElement('h1');
            drinks.innerHTML='Drinks';
            elements.appendChild(drinks);
            const head = document.createElement('h3');
            head.innerHTML = "Coffee";
            entree.appendChild(head);
            const p = document.createElement('p');
            p.innerHTML = "Coffee for the soul ";
            const img = document.createElement('img');
            img.src = coffee;
            img.classList.add('img');
            entree.appendChild(img);
            entree.appendChild(p);
        }
        if(count ==5){
            const head = document.createElement('h3');
            head.innerHTML = "Rakija";
            entree.appendChild(head);
            const p = document.createElement('p');
            p.innerHTML = "Puts some hair on your chest";
            const img = document.createElement('img');
            img.src = rakija;
            img.classList.add('img');
            entree.appendChild(img);
            entree.appendChild(p);
        }
        count++;
        elements.appendChild(entree);

    }
    
   return elements;
}
 
 