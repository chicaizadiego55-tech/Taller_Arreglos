let arregloIzquierda = [];
let arregloDerecha = [];
 
function agregarEdad(){
    let edad = document.getElementById("edad");
    let edadValue = edad.value;
    let valorEdad = parseInt(edadValue);
    arregloIzquierda.push(valorEdad);
    mostrarPantalla();
}
 
function mostrarPantalla(){
    let ctxIzquierdo = document.getElementById("tablaIzquierda");
    ctxIzquierdo.innerHTML = "";
    for(let i = 0; i < arregloIzquierda.length; i++){
        ctxIzquierdo.innerHTML += "<tr><td>"+arregloIzquierda[i] +"</td><td><button class='btn-eliminar' type='button' onclick='eliminarIzquierda("+i+")'>Eliminar</button></td><td><button class='btn-mover' onclick='moverDerecha("+i+")'>➜</button></td></tr>"
    }
 
}
 
function eliminarIzquierda(indice){
    console.log(arregloIzquierda);
    arregloIzquierda.splice(indice,1);
    console.log(arregloDerecha);
    mostrarPantalla();
}
 
function mostrarDerecha(){
    let ctxDerecho=document.getElementById("tablaDerecha");
    ctxDerecho.innerHTML="";
    for(let i=0; i<arregloDerecha.length;i++){
        ctxDerecho.innerHTML+="<tr><td><button class='btn-mover' onclick='moverIzquierda("+i+")'>⬅</button></td><td>"+arregloDerecha[i]+"</td><td><button class='btn-eliminar' onclick='eliminarDerecha("+i+")'>Eliminar</button></td></tr>"
    }
}
 
function eliminarDerecha(indice){
    arregloDerecha.splice(indice,1)
    mostrarDerecha()
 
}
 
function moverDerecha(indice){
    let valorIzquierda=arregloIzquierda[indice]
    arregloDerecha.push(valorIzquierda)
    eliminarIzquierda(indice)
    mostrarDerecha()
}

function moverIzquierda(indice){
    let valorDerecha=arregloDerecha[indice]
    arregloIzquierda.push(valorDerecha)
    eliminarDerecha(indice)
    mostrarPantalla()
}
 