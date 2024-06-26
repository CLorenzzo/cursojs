function convert(){
   //variaveis
    var temp = window.document.getElementById("temp1").value
    var fmod = window.document.getElementsByName("mod1")
    var smod = window.document.getElementsByName("mod2")
    var temp = Number(temp)
    var fromounit = ''
    var tounit = ''
    var res = window.document.getElementById('result')


    //primeira unidade
    if(fmod[0].checked) {
        fromounit = 'Celsius'
    }else if(fmod[1].checked){
        fromounit = 'Fahrenheit'
    }else if(fmod[2].checked){
        fromounit = 'Kelvin'
    }


    //segunda unidade
    if(smod[0].checked){
        tounit = 'Celsius'
    }else if(smod[1].checked){
        tounit = 'Fahrenheit'
    }else if(smod[2].checked){
        tounit = 'Kelvin'
    }

    //mensagens de erro
    if(fromounit == tounit){
        window.alert('[ERRO] VOCÊ NÃO PODE CONVERTER DUAS UNIDADES IGUAIS!')
    }

    if(isNaN(temp)){
        window.alert('[ERRO] USE APENAS NÚMEROS POR FAVOR!')
    }

    //conversão
    var result = 0

    if(fromounit === 'Celsius'){
        if(tounit === 'Fahrenheit'){
            result = (temp * 9/5) + 32
        }else if(tounit === 'Kelvin'){
            result = temp + 273.15
        }
    }
    if(fromounit === 'Fahrenheit'){
        if(tounit === 'Celsius'){
            result = (temp - 32) * 5/9
        }else if(tounit === 'Kelvin'){
            result = ((temp - 32) * 5/9) + 273.15
        }
    }
    if(fromounit === 'Kelvin'){
        if(tounit === 'Celsius'){
            result = temp - 273.15
        }
        if(tounit === 'Fahrenheit'){
            result = ((temp - 273.15) * 9/5) + 32
        }
    }
    
    
    res.innerHTML = `A converção de ${temp} graus ${fromounit} é igual a ${result} graus ${tounit}`
}