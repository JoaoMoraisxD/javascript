let a = window.document.querySelector ('div > p')
let bgdiv = window.document.getElementById ('area')

a.addEventListener ('click', clicar)
a.addEventListener ('mouseenter', entrar)
a.addEventListener ('mouseout', sair)

bgdiv.addEventListener ('click', clicar)

function clicar() {
    a.innerText  = 'clicou !'
    bgdiv.style.background = 'darkred'
}
function entrar() {
    a.innerText = 'Entrou'
}
function sair() {
    a.innerText = 'saiu'
} 