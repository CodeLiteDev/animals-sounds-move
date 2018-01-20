window.addEventListener("load", cargaPagina);

//const ANIMACIONES =[{"1":"rota"},{"2":"grande"},{"3":"pequenio"}];

function cargaPagina() {

    var divAnimales = document.createElement("div");
    divAnimales.setAttribute("id", "animales");
    document.body.appendChild(divAnimales);

    var animales = ["cerdo", "gato", "perro", "vaca"];

    for (var i = 0; i < animales.length; i++) {
        //console.log(animales[i]);

        var div = document.createElement("div");
        div.setAttribute("id", animales[i]);
        
        divAnimales.appendChild(div);

        
        var img = document.createElement("IMG");
        img.setAttribute("src", "images/"+animales[i]+".png");
        img.setAttribute("alt", animales[i]);
        img.setAttribute("class", "animal");
        div.appendChild(img);
        
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('id', 'audio'+animales[i]);
        audioElement.setAttribute('src', 'sounds/'+animales[i]+'.wav');
        div.appendChild(audioElement);
        
    }
    

    document.getElementById("perro").addEventListener("click", playPerro);
    document.getElementById("cerdo").addEventListener("click", playCerdo);
    document.getElementById("vaca").addEventListener("click", playVaca);
    document.getElementById("gato").addEventListener("click", playGato);

}

function playPerro(){
    
    document.getElementById("audiocerdo").pause();
    document.getElementById("audiovaca").pause();
    document.getElementById("audiogato").pause();

    document.getElementById("audioperro").play();
    document.getElementById("perro").className="animal pequenio";
    
    var claseAnimacion = document.getElementsByClassName("animal pequenio");

    function myPause() {
        document.getElementById("audioperro").pause();
        claseAnimacion.classList.remove("pequenio");
    }
    setInterval(myPause, 5000);
    
}

function playGato(){

    document.getElementById("audiocerdo").pause();
    document.getElementById("audiovaca").pause();
    document.getElementById("audioperro").pause();

    document.getElementById("audiogato").play();
    function myPause() {
        document.getElementById("audiogato").pause();
    }
    setInterval(myPause, 5000);
}

function playCerdo(){
    
    document.getElementById("audioperro").pause();
    document.getElementById("audiovaca").pause();
    document.getElementById("audiogato").pause();

    document.getElementById("audiocerdo").play();
    function myPause() {
        document.getElementById("audiocerdo").pause();
    }
    setInterval(myPause, 5000);
}

function playVaca(){
    
    document.getElementById("audiocerdo").pause();
    document.getElementById("audioperro").pause();
    document.getElementById("audiogato").pause();

    document.getElementById("audiovaca").play();
    function myPause() {
        document.getElementById("audiovaca").pause();
    }
    setInterval(myPause, 5000);
}

function animacionAleatoria(){
    
    var num = getNumeroAleatorio(1,4);
    
    if (num===1) {
       animacionAleatoria="rota";
    }else if(num===2){
       animacionAleatoria="grande";
    }else{
       animacionAleatoria="pequenio";
    }
    return animacionAleatoria;
    
}

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getNumeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}
