    function loadPage(selector, link) {
        if(document.querySelector(selector)){
            fetch(link)
            .then(function (response) {
                return response.text();
            })
            .then(function (body) {
                document.querySelector(selector).innerHTML = body;
            });
        }
    }
//Logo-load
loadPage('#logo', 'links/logo.html');
//Main(Horizontal)-menu-load
loadPage('#menu-hor', 'links/menu-hor.html');
loadPage('#column-left', 'links/column-left.html');
loadPage('#translate', 'links/translation.html');
loadPage('#useful-links', 'links/useful-links.html');
loadPage('#footer', 'links/footer.html');
    //load Hamburger.js, Google Translate js
    function dynamicLoadScript(url) {
    let scriptURL = document.createElement("script");
    scriptURL.src = url;
    document.body.appendChild(scriptURL);
    }
    dynamicLoadScript('js/dark-mode.js');
    dynamicLoadScript('js/mobile-menu.js');
    dynamicLoadScript('js/visually-impaired.js');
    dynamicLoadScript('js/gtranslatelocal.js'); dynamicLoadScript('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
// Опционально - можно включить/отключить скрипт плавающего окна вк. Жрет тонну кб, есть ли отдача от 100кб кода? Как вариант подключить по нажатию на кнопку, которая будет подменять аналогичную кнопку вк.
//    dynamicLoadScript('js/vk.js');



