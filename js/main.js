var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 50;
var nivel = window.location.search.replace('?','');
var criaMosquitoTempo = 1500;

if (nivel === 'normal'){
    criaMosquitoTempo = 1500;
} 
else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000;
}
else{
    criaMosquitoTempo = 750;
}

var cronometro = setInterval (function(){
    if (tempo < 0){
        //vitoria
        clearInterval(cronometro); //elima a função da memoria da aplicação
        clearInterval(criarMosquito);
        window.location.href = 'vitoria.html'
    }
    else{
        //continue
        document.getElementById('cronometro').innerHTML =  tempo;
        tempo -= 1;
    }

}, 1000);

 function ajustaTamnhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;   
 }

var criarMosquito = function posicaoRandomica(){

    //remove if exists and control life points
    if (document.getElementById('mosquito')) {
        
        //remove element
        document.getElementById('mosquito').remove()

        //remove life point or game over
        if (vidas>3){
            window.location.href = 'fim_de_jogo.html'
        }
        else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }

    } else{
        console.log("element doesn't exists!");
    }

    //posicoes randomicas
    let posicaoX = Math.floor(Math.random() * largura - 90);
    let posicaoY = Math.floor(Math.random() * altura - 90); 
   
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //criacao de elementos
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    
    //setando coordenadas
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.id = 'mosquito'

    mosquito.onclick = function (){
        this.remove(); //this faz referencia ao proximo elemento html que executou a função
    };

    document.body.appendChild (mosquito);
}

function tamanhoAleatorio(){
    var classe =  Math.floor(Math.random() * 3);
    switch(classe){
        case 0: 
            return 'mosquito0';
        case 1: 
            return 'mosquito1';
        case 2: 
            return 'mosquito2';     
        case 3: 
            return 'mosquito3';       
    }
}

function ladoAleatorio(){
    var classe =  Math.floor(Math.random() * 2);
    switch(classe){
        case 0: 
            return 'ladoA';
        case 1: 
            return 'ladoB';      
    }    
}

setInterval(function(){
    criarMosquito()
}, criaMosquitoTempo);

ajustaTamnhoPalcoJogo();
//riarMosquito();