/**
 * 
 */



var canva = document.getElementById("dibujar");
var lienzo = canva.getContext("2d");
    lienzo.lineWidth = 1;

    var ruta=false;



function dibujar(evento){

    x=evento.clientX - canva.offsetLeft;
    y=evento.clientY - canva.offsetTop;

    if(ruta==true){
        lienzo.lineTo(x,y);
        console.log("Position x:"+x+"y"+y)
        lienzo.stroke();
    }
}


canva.addEventListener("mousemove", dibujar);

canva.addEventListener("mousedown", function(){
    ruta=true;
    lienzo.beginPath();
    lienzo.moveTo(x,y);
    console.log("Position Inicial x:"+x+"y"+y);
    canva.addEventListener("mousemove", dibujar);
})


canva.addEventListener("mouseup", function(){
    ruta=false;
})

function colorTrazo(color){
    lienzo.strokeStyle=color.value;
}

function grosorPluma(grosor) {
    lienzo.lineWidth=grosor.value;
    document.getElementById("valor").innerHTML=grosor.value;
}

function limpiar(){
    lienzo.clearRect(0,0,canva.width, canva.height);
}
/**
 * Creacion de las funciones 

 var color = document.getElementById("p");
function colorTrazo(color){
    colorInicial = color;
}

function grosorPluma(g){
    grosorIncial= g;
}

function dibujar(x1,y1,x2,y2){
    lienzo.beginPath();
    lienzo.strokeStyle = colorTrazo;
    lienzo.lineWidth = grosorPluma;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

 */