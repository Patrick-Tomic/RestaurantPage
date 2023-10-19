import Logo from './imgs/flag.png'
import background from './imgs/background.jpeg'
export default function build(){
    const content = document.querySelector('#content');
   
        
            const elements = document.createElement('div');
            elements.classList.add('mainContent');
            const head = document.createElement('h2');
            const img = document.createElement('img');
                head.innerHTML = "Pat's Bosnian American fusion";
                    img.setAttribute('id','logo');
                    img.src = Logo;
            const p =document.createElement('p');
            p.innerHTML = "Bosnia is a country rich with natural beauty and delicious cuisine!!<br>Bosnia specializes in a large vegetarian diet but, the people also enjoy their share of salted meats, delicous cheeses, and hard homemade liquor!"
            const back = document.createElement('img');
            back.src = background;
            back.classList.add('background');
                
                elements.appendChild(head);
                 elements.appendChild(img);
            elements.appendChild(p);    
            elements.appendChild(back);

        const table = document.createElement('table');
        for(let i = 0; i<2;i++){
            const tr = document.createElement('tr');
            
            for(let j=0;j<7;j++){
                const th = document.createElement('th');
                const td = document.createElement('td');
                if(i==0){
                switch(j){
                    case 0:
                        th.innerHTML = "Monday";
                        tr.appendChild(th);
                        break;
                    case 1:
                        th.innerHTML = "Tuesday";
                        tr.appendChild(th);
                        break;
                    case 2:
                        th.innerHTML ="Wedensday";
                        tr.appendChild(th);
                        break;
                    case 3:
                        th.innerHTML = "Thursday";
                        tr.appendChild(th);
                        break;
                    case 4:
                        th.innerHTML = "Friday";
                        tr.appendChild(th);
                        break;
                    case 5:
                        th.innerHTML = "Saturday";
                        tr.appendChild(th);
                        break;
                    case 6:
                        th.innerHTML = "Sunday";
                        tr.appendChild(th);
                        break;
                    
                }}else if(i==1){
                    switch(j){
                        case 0:
                            td.innerHTML = "Closed";
                            tr.appendChild(td);
                            break;
                        case 1:
                            td.innerHTML = "11-9pm";
                            tr.appendChild(td);
                            break;
                        case 2:
                            td.innerHTML ="11-9pm";
                            tr.appendChild(td);
                            break;
                        case 3:
                            td.innerHTML = "11-9pm";
                            tr.appendChild(td);
                            break;
                        case 4:
                            td.innerHTML = "11-8pm";
                            tr.appendChild(td);
                            break;
                        case 5:
                            td.innerHTML = "11-8pm";
                            tr.appendChild(td);
                            break;
                        case 6:
                            td.innerHTML = "12-6pm";
                            tr.appendChild(td);
                            break;
                        
                    }
                }
            }
            table.appendChild(tr);
            }
        
            elements.appendChild(table);

            return elements;
    }
    
  