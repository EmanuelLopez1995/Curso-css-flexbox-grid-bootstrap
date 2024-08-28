

// if(altura >= 160){
//     datos.innerHTML += `<h1>Eres alto</h1>`;
// }else{
//     datos.innerHTML += `<h1>Eres bajito</h1>`;
// }

// for(var i=0;i<=10;i++){
//     datos.innerHTML += i;
// }

function muestraNombre(nombre,altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = `
    <h1>Hola</h1>
    <h2>Como va? Soy ${nombre}, alto: ${altura}</h2>
    `;
}

muestraNombre("Ema", "170");