function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        if (!fsex[0].checked && !fsex[1].checked) {
            window.alert('Selecione o sexo!')
            return
        }

        if (fsex[0].checked) {
            if (idade < 10) res.innerHTML = `É uma criança com ${idade} anos.`
            else if (idade < 21) res.innerHTML = `É um jovem com ${idade} anos.`
            else if (idade < 50) res.innerHTML = `É um adulto com ${idade} anos.`
            else res.innerHTML = `É um sénior com ${idade} anos.`
        } else {
            if (idade < 10) res.innerHTML = `É uma criança com ${idade} anos.`
            else if (idade < 21) res.innerHTML = `É uma jovem com ${idade} anos.`
            else if (idade < 50) res.innerHTML = `É uma adulta com ${idade} anos.`
            else res.innerHTML = `É uma sénior com ${idade} anos.`
        }
    }
}
