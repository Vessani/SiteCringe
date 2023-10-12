    const currentPath = window.location.pathname;    
    const menu = document.getElementById('menu');
    const links = menu.getElementsByTagName('a');    
    
    for (const link of links) {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
          link.classList.add('active');
        }
    }


    function enviarEmail() {
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let rua = document.getElementById('rua').value;
        let numero = document.getElementById('numero').value;
        let complemento = document.getElementById('complemento').value;
        let cidade = document.getElementById('cidade').value;
        let estado = document.getElementById('estado').value;
        let cep = document.getElementById('cep').value;
    
        
        if (nome && email && rua && numero && complemento && cidade && estado && cep) {    
            document.getElementById('mensagemEnvio').innerHTML = 'Email enviado para restaurantetiojoao@gmail.com';
            document.getElementById('seuFormulario').reset();
        } else {
            document.getElementById('mensagemEnvio').innerHTML = 'Preencha todos os campos.';
        }
    }
           
            
    