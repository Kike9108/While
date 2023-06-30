// Ejercicio 1
/*Crea un programa que pregunte al usuario un número. Mostrar losmnúmeros que son múltiplos de 5 desde 1 hasta el número introducido por el usuario*/

function ejercicio1() {
    let input = document.getElementById("inputEjercicio1").value;
    let i = 5;
    let vector = [];
    while(i < input ) {
        vector.push(i);
        i+=5;
    }
    let salida = document.getElementById("resultado1");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector}]`;
}

// Ejercicio 2
/*Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.*/

function ejercicio2() {
    let input1 = document.getElementById("inputEjercicio2.1").value;
    let input2 = document.getElementById("inputEjercicio2.2").value;
    let i = 1;
    let vector = [];
    while(i <= 50) {
        if(i != input1 && i != input2) {
            vector.push(i);
        } else {
            vector.push("¡LOTERÍA!");
        }
        i++;
    }
    let salida = document.getElementById("resultado2");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector}]`;
}

// Ejercicio 3
/*Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola. */

function ejercicio3() {
    let input;
    let vector = [];
    do {
        input = parseInt(prompt("Ingrese un número (0 para msalir y mostrar el resultado):"));
        vector.push(input);
    } while (input !== 0);
    let salida = document.getElementById("resultado3");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector.slice(0,vector.length-1)}]`;
}

// Ejericio 4
/*Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.*/

function ejercicio4() {
    let input;
    let vector = [];
    do {
        input = prompt("Ingrese una palabra (Aceptar sin escribir para salir y mostar el resultado");
        vector.push(input);
    } while (input !== "");
    let salida = document.getElementById("resultado4");
    salida.innerHTML = "";
    salida.innerHTML = `"${vector.join(' ')}"`
}

// Ejercicio 5
/*Crea un programa que solicite al usuario un día de la semana (ej:lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información*/

function ejercicio5() {
    let inp;
    let input;
    let vector = [];
    do {
        inp = prompt("Ingrese un día de la semana");
        input = inp.toLocaleLowerCase();
        vector.push(input);
        if(input === "lunes") {
            alert("Lunes, es solo una plabra tu decides el significado");
        } else if (input === "martes") {
            alert("Cuidado con lo que deseas");
        } else if (input === "miercoles" || input === "miércoles") {
            alert("Las buenas cosas toman tiempo");
        } else if (input === "jueves") {
            alert("Sonrie no todos los dias son buenos");
        } else if (input === "viernes") {
            alert("es VIERNES y el cuerpo lo sabe");
        } else if (input === "sabado" || input === "sábado") {
            alert("Inicio fin de semana");
        } else if (input === "domingo"){
            alert("Ve a descansar");
        } else {
            alert("Qué calendario usas tú?");
        }
    } while (input !== "domingo");
}