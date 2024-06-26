function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
           
           if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'homem-criança.png')
            }else if(idade < 21) {
               //jovem
               img.setAttribute('src', 'homem_jovem.png')
            }else if(idade > 21 && idade < 50){
                //adulto
               img.setAttribute('src', 'homem_adulto.png')
            }else{
                //idoso
               img.setAttribute('src', 'velho_homem.png')
            }
        
        }else if(fsex[1].checked) {
            genero = 'Mulher'
           
            if(idade >= 0 && idade < 10){
                //criança
              img.setAttribute('src', 'mulher-criança.png')
            }else if(idade < 21) {
               //jovem
              img.setAttribute('src', 'mulher_jovem.png')
            }else if(idade > 21 && idade < 50){
                //adulto
              img.setAttribute('src', 'adulto_mulher.png')
            }else{
                //idoso
              img.setAttribute('src', 'mulher_velha.png')
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }
}