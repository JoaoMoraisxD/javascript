let bt = window.document.getElementById('bt')

bt.addEventListener('click', clicar)

function clicar() {
   let n1 = window.prompt ('Qual seu nome? ')
   window.alert  (`Ola ${n1}. Seja bem vindo !`)
}
   