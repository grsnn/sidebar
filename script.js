let btnB = document.querySelector('#btnB');
let btnT = document.querySelector('#btnT');
let container = document.querySelector('#container');
let contentLink = document.querySelector('.content-link');
let links = document.querySelectorAll('.content-link-btn');

links.forEach((item) =>{

    item.addEventListener('click', event =>{
        event.preventDefault();

        links.forEach((item) => item.classList.remove('activeLink'));

        item.classList.add('activeLink');
    });

});


btnB.addEventListener('click', () =>{
    btnB.classList.add('removeB');
    btnT.classList.add('activeTimes');

    container.classList.add('containerActive');
    
    setTimeout(() => {
        container.classList.add('containerActiveTwo');
    }, 300);

    setTimeout(() => {
        contentLink.classList.add('content-link-active'); 
    }, 400);
});

btnT.addEventListener('click', () =>{
    btnB.classList.remove('removeB');
    btnT.classList.remove('activeTimes');

    contentLink.classList.remove('content-link-active'); 

    setTimeout(() => {
        container.classList.remove('containerActiveTwo');
    }, 200);

    setTimeout(() => {
        container.classList.remove('containerActive');
    }, 500);
});
