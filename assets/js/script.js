const menubutton = document.querySelector('#dismenu');
const menus = document.querySelector('.menus');
const mediaQuery = window.matchMedia('(min-width: 992px)');
if(mediaQuery.matches){
    menubutton.addEventListener('click',function(){
        if(menus.style.display === 'none')
        {
            menus.style.display = 'block';
        }
        else{
            menus.style.display = 'none';
    
        }
    })
}
// menubutton.addEventListener('click',function(){
//     if(menus.style.display === 'none')
//     {
//         menus.style.display = 'block';
//     }
//     else{
//         menus.style.display = 'none';

//     }
// })