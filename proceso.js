/**
 * Obteniendo el id del canvas y creando el liendo donde dibujar
 */
var canva = document.getElementById("dibujar");
var lienzo = canva.getContext("2d");
    lienzo.lineWidth = 1;
var crear = false;
var guardar = document.getElementById("btn_guardar")
/**
 * Creacion de Eventos para dibujar en el lienzo 
 */
canva.addEventListener("mousemove", dibujar);

canva.addEventListener("mousedown", punteroAbajo);

canva.addEventListener("mouseup", punteroArriba);

guardar.addEventListener("click", descargarImagen);
/**
 * Creacion de las funciones para dibujar en el lienzo 
 */
function dibujar(evento){

    x = evento.clientX - canva.offsetLeft;
    y = evento.clientY - canva.offsetTop;

    if(crear == true){
        lienzo.lineTo(x,y);
        console.log("Position x:"+x+"y"+y)
        lienzo.stroke();
    }
}

function punteroAbajo(){
    crear = true;
    lienzo.beginPath();
    lienzo.moveTo(x,y);
    console.log("Position Inicial x:"+x+"y"+y);
    canva.addEventListener("mousemove", dibujar);
}

function punteroArriba(){
    crear = false;
}

function colorTrazo(color){
    lienzo.strokeStyle = color.value;
}

function grosorPluma(grosor) {
    lienzo.lineWidth = grosor.value;
    document.getElementById("valor").innerHTML = grosor.value;
}

function limpiar(){
    lienzo.clearRect(0,0,canva.width, canva.height);
}

function borrar(){
    lienzo.strokeStyle = "#FFFFFF";
}

function descargarImagen() {
    // Crear un elemento <a>
    let enlace = document.createElement('a');
    // El título
    enlace.download = "Canvas como imagen.png";
    // Convertir la imagen a Base64 y ponerlo en el enlace
    enlace.href = canva.toDataURL();
    // Hacer click en él
    enlace.click();
    console.log(enlace);
}
