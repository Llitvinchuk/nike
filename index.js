const popup = document.querySelector('.popup')
const buttonMenu = document.querySelector('.header__button')
const buttonCloseMenu = document.querySelector('.popup__button')
const links = popup.querySelector('.popup__about')
const popupMenu = document.querySelector('.popup__menu')

function openPopup(popup) {
    popup.classList.add('popup__opened')
}
function closePopup(popup) {
    popup.classList.remove('popup__opened');
}
buttonMenu.addEventListener('click', function () {
    openPopup(popup)
    });

buttonCloseMenu.addEventListener('click', function () {
    closePopup(popup)
    });

popupMenu.onclick = function(event) {
    console.log(event.target.className)
    let target = event.target.className; 
    if (target != 'popup__about') return;
    closePopup(popup);
}
