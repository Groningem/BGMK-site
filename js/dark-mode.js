let darkMode = localStorage.getItem('dark-mode');
let darkModeButton = document.querySelector('.fa-moon-o');
//let today = new Date();
let today = new Date(1994, 12, 10);
let hourNow = today.getHours();

    if(!document.body.classList.contains('dark-mode') && (hourNow>=21 || hourNow<7) && (!darkMode || darkMode==='yes')){
        document.body.classList.add('dark-mode');
        darkModeButton.classList.add('pressed');
    } else if((hourNow<21 && hourNow>=7) && document.body.classList.contains('dark-mode') && !darkmode==='yes') {
        document.body.classList.remove('dark-mode');
        darkModeButton.classList.remove('pressed');
    }
    darkModeButton.addEventListener('click', function(){
        darkModeButton.classList.toggle('pressed');
        document.body.classList.toggle('dark-mode');
        if(darkModeButton.classList.contains('pressed')) localStorage.setItem('dark-mode', 'yes');
        else localStorage.setItem('dark-mode', 'no');
    })
