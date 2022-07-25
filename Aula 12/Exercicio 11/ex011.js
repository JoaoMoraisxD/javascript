let idade = 20
console.log(`Voce tem ${idade} Anos.`)
if (idade < 16) {
    console.log ('Nao Vota')
} else {
    if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opicional')
    } else {
        console.log ('Voto Obrigatorio')
    }
}
 /* Poderia usar o ELSE IF 
 ex:
    let idade = 20

    if (idade < 16) {
    console.log ('Nao Vota')
    } else if (idade >= 16 && idade < 18) {
        console.log('Voto opicional')
        } else {
            console.log ('Voto Obrigatorio')
        }  
  */