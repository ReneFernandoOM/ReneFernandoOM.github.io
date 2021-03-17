const populateAbout = () => {
    let divContent = document.getElementById('content');
    let divContainer = document.createElement('div');
    let divCard = document.createElement('div');
    let divCardHeader = document.createElement('div');
    let divCardBody = document.createElement('div');

    divContainer.classList.add('full-content', 'bg-img');
    divCard.classList.add('card');
    divCardHeader.classList.add('card-header');
    divCardBody.classList.add('card-body');

    divCardHeader.innerText = 'About Page';
    divCardBody.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum provident
    dicta officia veritatis eos omnis deleniti qui esse, repellendus fugiat voluptatum commodi
    voluptate aperiam dolor temporibus libero architecto? Quas?`

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);
    divContainer.appendChild(divCard);
    divContent.appendChild(divContainer);
};

export { populateAbout }