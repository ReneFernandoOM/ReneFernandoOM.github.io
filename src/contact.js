const contactPopulate = () => {
    let content = [
        ['Location', 'map-marker', ' 123 Willow Street Austin, TX 78702'],
        ['Hours', 'clock', ' Tue – Thu, 8 am – 10 pm\nFri – Sun, 8 am – 11 pm'],
        ['Phone', 'phone', ' (512) 555-0110']
    ]

    let divContent = document.getElementById('content');
    let divContainer = document.createElement('div');
    let card = document.createElement('div');
    let cardInfo = document.createElement('div');
    let cardMap = document.createElement('div');
    // let cardInfoLoc = document.createElement('div');
    // let cardInfoSch = document.createElement('div');
    // let cardInfoPho = document.createElement('div');
    divContainer.classList.add('menu-content');
    card.classList.add('card-contact');
    cardInfo.classList.add('card-info');
    content.forEach(element => {
        let infoContainer = document.createElement('div');
        let h4 = document.createElement('h4');
        let para = document.createElement('p');
        let icon = document.createElement('i');

        h4.innerText = element[0];
        infoContainer.appendChild(h4);

        icon.classList.add('fas', `fa-${element[1]}`)
        para.appendChild(icon);
        console.log(para.innerHTML);
        para.innerHTML = para.innerHTML + element[2];
        infoContainer.appendChild(para);

        cardInfo.appendChild(infoContainer);
    });
    let iMap = document.createElement('iframe');
    let mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sMcDonald\&\#39;s!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus"
    // iMap.src = mapSrc;
    // cardMap.appendChild(iMap)
    cardMap.innerHTML = `<iframe src="${mapSrc}" frameborder="0" allowfullscreen aria-hidden="false"></iframe>`
    cardMap.classList.add('card-map');

    card.appendChild(cardInfo);
    card.appendChild(cardMap);
    divContainer.appendChild(card);
    divContent.appendChild(divContainer);
}

export { contactPopulate }