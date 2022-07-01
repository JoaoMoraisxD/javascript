let bt = window.document.getElementById ('bt')

bt.addEventListener ("click", clicar)

function clicar() {
    let n = window.prompt ('Digite um numero')
    window.alert (`antes de ${n}, temos o número ${--n} \n Depois de ${n}, temos o número ${++n}`)
}