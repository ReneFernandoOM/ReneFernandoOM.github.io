(()=>{"use strict";const e=()=>{let e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div");t.classList.add("full-content","bg-img"),n.classList.add("card"),d.classList.add("card-header"),a.classList.add("card-body"),d.innerText="About Page",a.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum provident\n    dicta officia veritatis eos omnis deleniti qui esse, repellendus fugiat voluptatum commodi\n    voluptate aperiam dolor temporibus libero architecto? Quas?",n.appendChild(d),n.appendChild(a),t.appendChild(n),e.appendChild(t)};(()=>{let t=document.querySelector("#aboutLink"),n=document.querySelector("#menuLink"),d=document.querySelector("#contactLink");const a=e=>{e.classList.add("active")},i=(e(),a(t),t.addEventListener("click",(()=>{document.querySelector("#content").innerHTML="",e(),i(),a(t)})),n.addEventListener("click",(()=>{document.querySelector("#content").innerHTML="",(()=>{const e={sandwich:{title:"Corned Beef Sandwich",description:"Clove-rubbed corned beef and coleslaw between two pieces of cowboy fry bread. Served with a side salad or fried potatoes."},hotcakes:{title:"Hotcakes & Sausage",description:"Cornmeal and molasses hotcakes served with sweet fennel pork sausage."},burger:{title:"Bison Burger",description:"Potato bun, lettuce, tomato, wild onions, and pepper jack cheese. Served with a side salad or fried potatoes."},stew:{title:"Mutton Stew",description:"Tenderized mutton, carrots, celery, tomatoes, onion, rosemary, and black pepper. Served with two sourdough biscuits."},oatmeal:{title:"Steel Cut Oatmeal",description:"Served with molases, bananas, and fresh berries."},quails:{title:"Whole Quails",description:"Two whole roasted quails stuffed with oregano and garlic. Served with roasted beets, leeks, and potatoes."},lobster:{title:"Lobster Croquettes",description:"Two lobster and potato croquettes served with sour cream, parsnips, and radish."},"eggs&bacon":{title:"Bacon & Eggs",description:"Three strips of thick-cut, house-smoked bacon and two cage-free eggs. Served with two pieces of cowboy fry bread."}};let t=document.getElementById("content"),n=document.createElement("div");n.classList.add("menu-content");for(let[t,d]of Object.entries(e)){let e=document.createElement("div"),a=document.createElement("div"),i=document.createElement("img"),o=document.createElement("div"),c=document.createElement("div");i.src=`../static/images/${t}.jpg`,o.innerText=d.title,o.classList.add("card-menu-title"),c.innerText=d.description,c.classList.add("card-menu-body"),a.appendChild(i),a.appendChild(o),a.appendChild(c),a.classList.add("card-menu"),e.appendChild(a),e.classList.add("card-wrapper"),n.appendChild(e)}t.appendChild(n)})(),i(),a(n)})),d.addEventListener("click",(()=>{document.querySelector("#content").innerHTML="",(()=>{let e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div");t.classList.add("menu-content"),n.classList.add("card-contact"),d.classList.add("card-info"),[["Location","map-marker"," 123 Willow Street Austin, TX 78702"],["Hours","clock"," Tue – Thu, 8 am – 10 pm\nFri – Sun, 8 am – 11 pm"],["Phone","phone"," (512) 555-0110"]].forEach((e=>{let t=document.createElement("div"),n=document.createElement("h4"),a=document.createElement("p"),i=document.createElement("i");n.innerText=e[0],t.appendChild(n),i.classList.add("fas",`fa-${e[1]}`),a.appendChild(i),console.log(a.innerHTML),a.innerHTML=a.innerHTML+e[2],t.appendChild(a),d.appendChild(t)})),document.createElement("iframe"),a.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus" frameborder="0" allowfullscreen aria-hidden="false"></iframe>',a.classList.add("card-map"),n.appendChild(d),n.appendChild(a),t.appendChild(n),e.appendChild(t)})(),i(),a(d)})),()=>{[t,n,d].forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")}))})})()})();