function insert(num){

    let numero = document.getElementById("current").innerHTML
    document.getElementById('current').innerHTML = numero + num

}

function calc() {
    
    let resultado = document.getElementById("current").innerHTML

    if(resultado){
        document.getElementById("current").innerHTML = ""
        document.getElementById("last-result").innerHTML = eval(resultado)
        saveLocalStorage(eval(resultado))
    }
    else{
        document.getElementById("current").innerHTML = 'Nada para calcular'
    }

}


function saveLocalStorage (resultadoParametro){
    localStorage.setItem('resultado', resultadoParametro)
}


