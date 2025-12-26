function init() {
    let burgerMenu = document.getElementById('burger')
    burgerMenu.innerHTML = burgerMenuTemplate();

    let footerMenu = document.getElementById('mobile_footer');
    footerMenu.innerHTML = mobileFooterTemplate();

}
