/*=======SHOWMENU========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle =document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')

/*=======MENUSHOW========*/

/*validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show-menu')

    })
}


/*======MENUHIDDEN=====*/
/*validate if constamt exists */

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove ('show-menu')
    })
}
