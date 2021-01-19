(function(){
    window.onload = function() {
        $form = document.getElementsByTagName('form')[0];
        var $limpar = document.getElementById('limpar');//inicial limpar
        var $mostar_condicao_fisica = document.forms['calculo_imc'].mostar_condicao_fisica; //inicia com sim mostrar

        $form.addEventListener("submit", mostrarIMC); // submit:type botão mostrar imc        
        $mostar_condicao_fisica.addEventListener('change', mostrarIMC)//inicia mostrarIMC sim
                
        $limpar.addEventListener('click', function(){//limpar efeito click
            var $mostra_imc = document.getElementById("mostrar_imc");//var mostra imc
            $mostra_imc.textContent = '';//mostra imc fica vazio limpa resultado
        });
    }

    function calcularImc(peso, altura) {
        var imc = peso / (altura * altura);//calculo imc 
        return imc;//retorna imc para if
    }

    function classificarImc(imc) {//imc if e else de cada peso
        var classificao //varriavel pontuação imc
        if (imc < 17) {
            classificao = "muito abaixo do peso";
        } 
       else if (imc>17 && imc<=18.5) {
            classificao = "abaixo do peso";
        }
        else if (imc >= 18.6 && imc < 25) {
            classificao = "no peso Ideal";
        }
        else if (imc >= 25 && imc < 30) {
            classificao = "levemente acima do peso";
        }
        else if (imc >= 30 && imc < 35) {
            classificao = "com obesidade grau I";
        }
        else if (imc >= 35 && imc < 40) {
            classificao = "com obesidade grau II";
        }
        else if (imc >= 40) {
            classificao = "com obesidade grau III";
        }
        return classificao;//retorna pontuação
    }

    function mostrarIMC(event) {//resultado
        event.preventDefault(); //para ao clicar a tela não ter atualizada e sumir resultado imc no site
        
        var $nome = document.forms['calculo_imc'].nome;//tudo dentro formulario nome peso... criar variaveis para depois colocar em pratica com if else...
        var $peso = document.forms['calculo_imc'].peso;
        var $altura = document.forms['calculo_imc'].altura;
        var $mostrar_nome = document.forms['calculo_imc'].mostrar_nome;
        var $mostra_imc = document.getElementById("mostrar_imc"); //  $mostra_imc referencia em index.html  resultado
        
        var imc = calcularImc($peso.value, $altura.value).toFixed(2);//duas casas decimais
        
        if($nome.value != '' && $peso.value != '' && $altura.value != '' && $form.checkValidity()) {//se for diferente de vazio os inputs checkValidity é obrigatório ou não
        
            if ($mostrar_nome.value == 0 && mostar_condicao_fisica.value == 0)// se for 0==sim aparece nome e resultedo fisico abaixo
                $mostra_imc.textContent = $nome.value + ", seu IMC é " +imc+", você está "+classificarImc(imc)+".";       
            
            else if($mostrar_nome.value == 1 && mostar_condicao_fisica.value == 0) //senão.. 1==value não 
                $mostra_imc.textContent = "Seu IMC é " +imc+", você está "+classificarImc(imc)+".";
            
            else if ($mostrar_nome.value == 0 && mostar_condicao_fisica.value == 1)
                $mostra_imc.textContent = $nome.value + ", seu IMC é " +imc;
            
            else if($mostrar_nome.value == 1 && mostar_condicao_fisica.value == 1) 
                $mostra_imc.textContent = "Seu IMC é " +imc;
        }                    
    }
})();