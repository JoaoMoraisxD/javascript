let agora = new Date()
let hora =  agora.getHours()

console.log (`Agora sao exatamente ${hora} Horas.`)

if (hora < 5) {
    console.log ('Boa Madrugada !')
} else if (hora <= 12) {
    console.log ('Bom dia !')
} else if (hora <= 18){
    console.log ('Boa tarde !') 
} else if (hora > 18) {
    console.log ('Boa noite !')
} else {

}
