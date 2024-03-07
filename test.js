function calc(){

    event.preventDefault();
    var num = document.getElementById('num').value 
    var res = document.getElementById('res')
    res.innerText = ''
    if ( Number(num) == 0 || Number(num) > 10){

        alert('Digite um número de 1 á 10')

    } else {
        
        var element = document.createElement('div')
        for ( i = 1; i <=10; i++){

            var paragrafo = document.createElement('p')
            
            paragrafo.innerText = `${num} x ${i} = ${ num * i}`
            res.appendChild(paragrafo)
            limpar()
            
        }
        
    }
    
}
  
function limpar (){

     document.getElementById('num').value = ''

}
