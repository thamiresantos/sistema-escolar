    
    //GERANDO NOVA SENHA 

    let a = window.document.getElementById('area-senha')
    let novasenha = window.document.getElementById('senha-nova')
    a.addEventListener('click', gerarSenha)
        
    function gerarSenha () {
        novasenha.innerText ='NOV4S3NH4'
        novasenha.style.color = 'red'
        novasenha.style.padding = '10px'
    }


   
