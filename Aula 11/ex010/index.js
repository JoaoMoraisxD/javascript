

function calcular() {
    let txtv = window.document.querySelector('input#txtvel')
    let res = window.document.querySelector('div#res')
   let vel = Number(txtv.value)

    
    res.innerHTML = `<p> Sua velocidade atual e de <strong>${vel} km/h</strong> </p>`
  
    if (vel > 60) {
        res.innerHTML += `<p>Voce esta <strong>MULTADO</strong> por excesso de velocidade </p>`
        res.innerHTML = `<p>Dirija sempre com sinto de segunrança!</p>`
    }
    res.innerHTML = `<p>Dirija sempre com sinto de segunrança!</p>`
}


