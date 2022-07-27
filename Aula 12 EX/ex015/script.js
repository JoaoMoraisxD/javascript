function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'img/criança_masc.png')
            }else if (idade >= 12 && idade < 18) {
                // jovem
                img.setAttribute('src', 'img/masc_ad.png')
            }else if (idade >=18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adult_masc.png')
            }else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher' 
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'img/criança_fem.png')
            }else if (idade >= 12 && idade < 18) {
                // jovem
                img.setAttribute('src', 'img/fem_ad.png')
            }else if (idade >=18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adult_fem.png')
            }else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img)
    }
}