function carregar () {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src ='img/tarde.png'
        document.body.style.background = '#b9846f'
    }else {
        //BOA NOITE!
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }
}