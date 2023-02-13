// OPENS/CLOSES MENU
function menu(){
    let menu = document.getElementById('side-bar')
    //if menu is showing
    if(menu.classList.contains('translate-x-0')){
        menu.classList.remove('translate-x-0')
        menu.classList.add('translate-x-[-100%]')
    }else{ //if menus is not showing
        menu.classList.remove('translate-x-[-100%]')
        menu.classList.add('translate-x-0')
    }
}

//open close sort menu in mobile
function sortMenuMobile(){
    let sortMenu = document.getElementById('sortMenuMobile')

    //if the menu is showing, close it
    if(sortMenu.classList.contains('max-h-100')){
        sortMenu.classList.remove('max-h-100')
        sortMenu.classList.add('max-h-0')
    }else{
        sortMenu.classList.remove('max-h-0')
        sortMenu.classList.add('max-h-100')
    }
}