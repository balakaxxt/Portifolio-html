let menu = document.querySelector('#menu-btn')

let header = document.querySelector('.header')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active'); 
    document.getElementById('home').style.marginLeft = '0px';
    
}


const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
} )




