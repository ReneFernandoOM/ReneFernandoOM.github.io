import { populateAbout } from './about'
import { menuPopulate } from './menu'
import { contactPopulate } from './contact'

(() => {
    let aboutLink = document.querySelector('#aboutLink');
    let menuLink = document.querySelector('#menuLink');
    let contactLink = document.querySelector('#contactLink');

    const activateItem = (element) => {
        element.classList.add('active');
    }

    const init = (() => {
        populateAbout();
        activateItem(aboutLink);
    })()

    const addListeners = (() => {
        aboutLink.addEventListener('click', () => {
            document.querySelector('#content').innerHTML = '';
            populateAbout();
            deactivateItems();
            activateItem(aboutLink);
        })

        menuLink.addEventListener('click', () => {
            document.querySelector('#content').innerHTML = '';
            menuPopulate();
            deactivateItems();
            activateItem(menuLink);
        })

        contactLink.addEventListener('click', () => {
            document.querySelector('#content').innerHTML = '';
            contactPopulate();
            deactivateItems();
            activateItem(contactLink);
        })
    })()

    const deactivateItems = () => {
        [aboutLink, menuLink, contactLink].forEach(element => {
            if (element.classList.contains('active')) element.classList.remove('active')
        })
    }

})()
