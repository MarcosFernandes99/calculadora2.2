function insert(num){

    let numero = document.getElementById("current").innerHTML
    document.getElementById('current').innerHTML = numero + num

}

function calc() {
    
    let resultado = document.getElementById("current").innerHTML

    if(resultado){
        document.getElementById("current").innerHTML = eval(resultado)
        document.getElementById("last-result").innerHTML = eval(resultado)
    }
    else{
        document.getElementById("current").innerHTML = 'Nada para calcular'
    }

}


