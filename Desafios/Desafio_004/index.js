let bt = window.document.getElementById ('bt')

bt.addEventListener ("click", clicar)

function clicar() {
    let produto = window.prompt ('O que deseja comprar ?')
    let valor = window.prompt (`Qual valor do ${produto} ?`)
    let pagamento = window.prompt (`Qual foi o valor que voce deu para pagar o ${produto} ?`)
    window.alert (`Você comprou ${produto} que custou R$${valor}.\nPagou com R$${pagamento} em dinheiro. \nE vai receber` + ` R$${pagamento - valor}` + ` de troco.`)
}

