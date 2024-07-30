function clique(){
    let altura = document.getElementById('txta')
    let peso =document.getElementById('txtp')
    let res = document.getElementById('res')
    if(altura.value.length == 0 || peso.value.length == 0){
        res.innerHTML='Impossivel Calcular'
        alert('[ERRO] Digite Algo!!!')
    }else{

        res.innerHTML=''
        let imc = Number(peso.value)/Number((altura.value)**2)
       
            let c = ''
            if(imc< 18.5){
                c = 'Abaixo do Peso'
            } else if(imc< 24.9){
                c = 'Peso Normal'
            } else if(imc<30){
                c = 'SobrePeso'
            } else if(imc < 35){
               c = 'Obesidade Grau I'
            
            } else if(imc < 40){
                c = 'Obesidade Grau II'
            } else{
                c = 'Obesidade Grau III'
            }
            res.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${c})`
    }
}