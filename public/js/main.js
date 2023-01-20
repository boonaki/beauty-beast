// OPENS/CLOSES MENU
function menu(){
    console.log('hello')
    let menu = document.getElementById('side-bar')
    //if menu is not showing
    if(menu.classList.contains('translate-x-0')){
        menu.classList.remove('translate-x-0')
        menu.classList.add('translate-x-[100%]')
    }else{ //if menus is showing
        menu.classList.remove('translate-x-[100%]')
        menu.classList.add('translate-x-0')
    }
}