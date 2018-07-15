'use strict'

let btnMenu = document.getElementById('btn-menu')
let nav = document.getElementById('nav')

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('mostrar')
})