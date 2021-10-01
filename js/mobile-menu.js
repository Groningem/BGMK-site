    let menuu = document.querySelector('#mobile-menu');
    let overlay = document.querySelector('.overlay');
    let menuHormenu = document.querySelector('.menu--hormenu');
    let hormenuElem = document.getElementsByClassName('hormenu__elem');
    let addContentMenu = document.getElementsByClassName('add-content');
    let addContentMenuColLeft = document.getElementsByClassName('side-menu__elem add-content');
    let addContentMenuHormenu = document.getElementsByClassName('hormenu__elem add-content');
    let hormenuElemWrapper = document.querySelectorAll('.hormenu__elem__wrapper');
    let sideMenu = document.querySelector('.side-menu.side-menu--left');
    let captionLeft = document.querySelector('.title-menu.title-menu--left');
    let sidemenuElem = document.querySelectorAll('.side-menu__elem');
    let sidemenuElemWrapper = document.querySelectorAll('.side-menu__elem__wrapper');
    let menuUsefulLnks = document.querySelector('#useful-links');
    let sights = document.querySelector('.sights');
    let buttonMainMenu = document.querySelector('.mobile-menu__button.mobile-menu__button--main-menu-button');
    let buttonDepartments = document.querySelector('.mobile-menu__button.mobile-menu__button--departments');
    let buttonUsefulLinks = document.querySelector('.mobile-menu__button.mobile-menu__button--useful-links');
    let buttonMore = document.querySelector('.mobile-menu__button.mobile-menu__button--more');
    let menuMore = document.getElementById('more');
    let buttonBack = document.querySelectorAll('.button-back')
    
    function addArrowsForSndLvlMenu(fstLvlElem, sndLvlElem) {
        for (let i = 0, j = 0; i < fstLvlElem.length; i++) {
            if (fstLvlElem[i].contains(sndLvlElem[j])) {
                fstLvlElem[i].classList.add('add-content');
                for (; j < sndLvlElem.length; j++) {
                    if (fstLvlElem[i].contains(sndLvlElem[j])) {} else break;
                }
            }
        }
    }

    function eventListenerMobileMenu(button, menu) {
        button.addEventListener('click', function() {
            if(button.classList.contains('pressed')){
            menu.classList.remove('open');
            button.classList.remove('pressed');
            overlay.classList.remove('open');
            for(let i =0;i<addContentMenu.length;i++) {
                addContentMenu[i].classList.remove('open');
            }
            menuHormenu.classList.remove('hidden');
            sideMenu.classList.remove('hidden');
        } else {
            overlay.classList.add('open');
            menuHormenu.classList.remove('open');
            sideMenu.classList.remove('open');
            menuUsefulLnks.classList.remove('open');
            menuMore.classList.remove('open');
            menu.classList.add('open');
            buttonMainMenu.classList.remove('pressed');
            buttonDepartments.classList.remove('pressed');
            buttonUsefulLinks.classList.remove('pressed');
            buttonMore.classList.remove('pressed');
            button.classList.add('pressed');
            for(let i =0;i<addContentMenu.length;i++) {
                addContentMenu[i].classList.remove('open');
            }
            menuHormenu.classList.remove('hidden');
            sideMenu.classList.remove('hidden');
        }
                                })
    }
    function loadMenu(){
        if (window.innerWidth <= 1023) {
            menuMore.insertBefore(sights, document.querySelector('.more__elem--public'));
            sights.classList.add('open');
            for(let i =0; i<addContentMenu.length; i++) {
                addContentMenu[i].addEventListener('click', function(){
                addContentMenu[i].classList.add('open');
                if(addContentMenu[i].classList.contains('hormenu__elem')) menuHormenu.classList.add('hidden');
                else if(addContentMenu[i].classList.contains('side-menu__elem')) sideMenu.classList.add('hidden');
                                
                })
            }
            for(let i=0;i<buttonBack.length;i++){
                buttonBack[i].addEventListener('click', function(e){
                buttonBack[i].classList.add('pressed');
                buttonBack[i].parentNode.parentNode.classList.remove('open');
                buttonBack[i].parentNode.parentNode.parentNode.classList.remove('hidden');
                buttonBack[i].classList.remove('pressed');
                e.stopPropagation();
                })
            }
        } else {
                    for(let i =0; i<addContentMenu.length; i++) {
                        addContentMenu[i].addEventListener('click', function(){
                        addContentMenu[i].classList.add('open');
                        if(addContentMenu[i].classList.contains('hormenu__elem')) menuHormenu.classList.add('hidden');
                        else if(addContentMenu[i].classList.contains('side-menu__elem')) sideMenu.classList.add('hidden');
                        })
                       }
                    for(let i=0;i<buttonBack.length;i++){
                        buttonBack[i].addEventListener('click', function(e){
                        buttonBack[i].classList.add('pressed');
                        buttonBack[i].parentNode.parentNode.classList.remove('open');
                        buttonBack[i].parentNode.parentNode.parentNode.classList.remove('hidden');
                        buttonBack[i].classList.remove('pressed');
                        e.stopPropagation();
                        })
                    }
        }
    }
    function changeMenu() {
        if (window.innerWidth <= 1023) {
            menuMore.insertBefore(sights, document.querySelector('.more__elem--public'));
            sights.classList.add('open');
        } else {
            document.getElementById('column-left').appendChild(sights);
            sights.classList.remove('open');
                    for(let i =0;i<addContentMenu.length;i++) {
                        addContentMenu[i].classList.remove('open');
                        if(addContentMenu[i].classList.contains('hormenu__elem')) menuHormenu.classList.remove('hidden');
                        else if(addContentMenu[i].classList.contains('side-menu__elem')) sideMenu.classList.remove('hidden');
                    }
        }
    }

    window.addEventListener('resize', function () {
        changeMenu();
    });
    window.addEventListener('load', function () {
        loadMenu();
    });


    overlay.addEventListener('click', function () {
        overlay.classList.remove('open');
        menuHormenu.classList.remove('open');
        sideMenu.classList.remove('open');
        menuUsefulLnks.classList.remove('open');
        menuMore.classList.remove('open');
    })
    
    eventListenerMobileMenu(buttonMainMenu, menuHormenu);
    eventListenerMobileMenu(buttonDepartments, sideMenu);
    eventListenerMobileMenu(buttonUsefulLinks, menuUsefulLnks);
    eventListenerMobileMenu(buttonMore, menuMore);
    addArrowsForSndLvlMenu(hormenuElem, hormenuElemWrapper);
    addArrowsForSndLvlMenu(sidemenuElem, sidemenuElemWrapper);