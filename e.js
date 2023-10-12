// Declaración de dos arreglos: 'array' y 'arrayD' con nombres de canciones.
var array = ["Cancion1", "Cancion2", "Cancion3", "Cancion4", "Cancion5", "Cancion6"];
var arrayD = ["Cancion1", "Cancion2", "Cancion3", "Cancion4", "Cancion5", "Cancion6", "Cancion7", "Cancion8", "Cancion9", "Cancion10", "Cancion11", "Cancion12"];

// Declaración de un arreglo 'historialC' vacío para mantener un historial de canciones reproducidas.
var historialC = [];
// Variable 'bandera' utilizada para alternar la visibilidad del historial de canciones.
var bandera = true;
// Función para mostrar información en la página HTML.
function show() {
    // Obtiene elementos de la página HTML por su ID.
    var h3 = document.querySelector("#cancion");
    var ul = document.querySelector("#ul");

    // Borra el contenido de los elementos h3 y ul.
    ul.innerHTML = "";
    h3.innerHTML = "";

    // Comprueba si el arreglo 'array' no está vacío y muestra la primera canción en el elemento h3.
    if (array.length != "") {
        h3.textContent = `Reproduciendo: ${array[0]}`;
    } else {
        h3.textContent = "no hay canciones";
    }

    // Itera a través de las canciones en 'array' y crea elementos de lista en el elemento ul.
    for (let index = 1; index < array.length; index++) {
        var li = document.createElement("li");
        li.textContent = array[index];
        ul.appendChild(li);
    }
}

// Función para quitar la primera canción del arreglo 'array' y agregarla al historial.
function quitarP() {
    historialC.unshift(array.shift());
    show();
    if(!bandera){
        bandera=!bandera;
        historial();
    }
    
}

// Función para quitar la última canción del arreglo 'array'.
function quitarU() {
    array.splice(array.length - 1, 1);
    show();
}

// Función para quitar una canción específica del arreglo 'array' mediante entrada de usuario.
function quitarE() {
    var input = document.querySelector("#input").value;
    var r = document.querySelector("#respuesta");
    let b = false;
    if (input === "") {
        r.style.color = "red";
        r.textContent = "Ingrese algo";
    } else {
        for (let index = 0; index < array.length; index++) {
            if (input == array[index]) {
                array.splice(index, 1);
                b = true;
            }
        }
        if (!b) {
            r.style.color = "red";
            r.textContent = "No existe '" + input + "'";
        }
    }
    show();
}

// Función para agregar una canción al arreglo 'array' mediante entrada de usuario.
function Agregar() {
    let b = true;
    var input = document.querySelector("#ingresar").value;
    var r = document.querySelector("#respuesta");
    r.innerHTML = "";

    // Comprueba si la canción ingresada está en el arreglo 'arrayD' y la agrega a 'array' si está disponible.
    arrayD.forEach(element => {
        if (element == input) {
            console.log(input);
            array.push(input);
            show();
            b = !b;
        }
    });

    // Muestra un mensaje de error si la canción no está disponible.
    if (b) {
        r.style.color = "red";
        r.textContent = "No está disponible";
    }
}



// Función para mostrar u ocultar el historial de canciones.
function historial() {
    var historial = document.querySelector("#historialU");
    historial.innerHTML = "";

    if (bandera) {
        if (historialC <= 0) {
            var li = document.createElement("h3");
            li.textContent = "No hay canciones";
            historial.appendChild(li);
        } else {
            historialC.forEach(element => {
                var li = document.createElement("li");
                li.textContent = element;
                historial.appendChild(li);
            });
        }
    }
    bandera = !bandera;
}

// Función para regresar la última canción del historial al arreglo 'array'.
function regresar() {
    var historial = document.querySelector("#historialU");
    
    if (historialC.length < 1) {
        historial.innerHTML = "";
        var li = document.createElement("p");
        li.style.color = "red";
        li.textContent = "No hay canciones";
        historial.appendChild(li);
    } else {
        if (historialC[0] === array[0]) return;
        else {
            array.unshift(historialC[0]);
            show();
        }
    }
}

// Variable 'c' utilizada para alternar la visibilidad del catálogo de canciones.
var c = false;

// Función para mostrar u ocultar el catálogo de canciones.
function catalogo() {
    var catalogo = document.querySelector("#ulcatalogo");
    c = !c;
    if (c) {
        arrayD.forEach(element => {
            var li = document.createElement("li");
            li.textContent = element;
            catalogo.appendChild(li);
        });
        return;
    }
    catalogo.innerHTML = "";
}

// Imprime la longitud del historial de canciones en la consola.
console.log(historialC.length);