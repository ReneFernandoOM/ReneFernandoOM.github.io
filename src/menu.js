const menuPopulate = () => {

    const menuItems = {
        'sandwich': {
            'title': 'Corned Beef Sandwich',
            'description': `Clove-rubbed corned beef and coleslaw between two pieces of cowboy fry bread. Served with a side salad or fried potatoes.`
        },
        'hotcakes': {
            'title': 'Hotcakes & Sausage',
            'description': `Cornmeal and molasses hotcakes served with sweet fennel pork sausage.`
        },
        'burger': {
            'title': 'Bison Burger',
            'description': `Potato bun, lettuce, tomato, wild onions, and pepper jack cheese. Served with a side salad or fried potatoes.`
        },
        'stew': {
            'title': 'Mutton Stew',
            'description': `Tenderized mutton, carrots, celery, tomatoes, onion, rosemary, and black pepper. Served with two sourdough biscuits.`
        },
        'oatmeal': {
            'title': 'Steel Cut Oatmeal',
            'description': `Served with molases, bananas, and fresh berries.`
        },
        'quails': {
            'title': 'Whole Quails',
            'description': `Two whole roasted quails stuffed with oregano and garlic. Served with roasted beets, leeks, and potatoes.`
        },
        'lobster': {
            'title': 'Lobster Croquettes',
            'description': `Two lobster and potato croquettes served with sour cream, parsnips, and radish.`
        },
        'eggs&bacon': {
            'title': 'Bacon & Eggs',
            'description': `Three strips of thick-cut, house-smoked bacon and two cage-free eggs. Served with two pieces of cowboy fry bread.`
        }
    }

    let divContent = document.getElementById('content');
    let divContainer = document.createElement('div');


    divContainer.classList.add('menu-content');
    for (let [imgName, foodJson] of Object.entries(menuItems)) {
        let cardWrapper = document.createElement('div');
        let card = document.createElement('div');
        let cardImage = document.createElement('img');
        let cardTitle = document.createElement('div');
        let cardBody = document.createElement('div');

        cardImage.src = `../static/images/${imgName}.jpg`;

        cardTitle.innerText = foodJson.title;
        cardTitle.classList.add('card-menu-title');

        cardBody.innerText = foodJson.description;
        cardBody.classList.add('card-menu-body');

        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        card.classList.add('card-menu');

        cardWrapper.appendChild(card);
        cardWrapper.classList.add('card-wrapper');

        divContainer.appendChild(cardWrapper);
    }
    divContent.appendChild(divContainer);

}

export { menuPopulate }