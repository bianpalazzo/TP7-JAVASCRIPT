
//variables

//valores
/**
 bolean =true/false
 string = "cadena"
 number = 0
 null = nada
 undefined =
 */

 /*
let nombre = "Bianca";
let apellido = "Palazzo";
let domicilio = "Chacabuco 149";
const DNI = 44600563;

console.log(nombre); "Bianca"
console.log(apellido); "Palazzo"
console.log(domicilio); "Chacabuco 149"
console.log(DNI); "44600563"
*/

//OPERADORES
/*
== → 5 == "5" true
=== → 5=== "5" false
≠ → 5 ≠ "5" = false
!== → 5 !== "5"  = trye

>
<
> = 4 >= 5 =true
< = 4 <= 5= true
&& (4>3) && (4>5) = false
|| (4>3) || (4>5) = false

*/


/*
let edad = 19;
let edadRequerida = 18;

if(edad === 19){
  console.log("Tiene su premio");
}else if (edad >= 18) {
  console.log("Entre"); 
}else {
  console.log("No entre"); 
}


switch (edad) {
  case 18:
    console.log("tienes 18");
    break;
  case 19:
    console.log("tienes 19");
    break;
  default:
    console.log("ingrese un valor valido");
    break;
}
*/

//BUCLES

//FOR

//ASIGNACION
/*
let a = 1
a +=1
a -=1
a *=1
a /=1
a++ a incrementara en 1
a-- a decrementara en 1
*/

/*
console.log("bucle for");
for(let i = 0; i < 10; i++){
console.log(i)
}

let bandera = 0;
console.log("bucle while");

while (bandera<10){
  console.log(bandera);
  bandera++;
}
console.log("bucle do while");

do{
  console.log(bandera); 
} while (bandera < 10)
 */


//FUNCIONES
/*
function saludar(){
console.log("saludaFuncion");
}
saludar();
const saludarArrowFunction = ()=>{
  console.log("saludaArrowFuncion");
}
saludarArrowFunction();

const sumaDosValores = (num1, num2)=>{
  return num1 + num2;
};

let resul = sumaDosValores(2,5)
console.log(resul);
*/


//OBJETOS EN JAVASCRIPT

/*
let persona = {
  nombre: "Bianca",
  apellido: "Palazzo",
  edad: 21,
  saludar: function(){
    console.log("Hola mi nombre es ", this.nombre);

  },
  direccion: {
    calle: "Calle Chacabuco",
    numero:149
  },
};
console.log(persona.direccion.calle);
*/

//ARREGLOS EN JAVASCRIPT
/*
let arreglonumeros =[1,2,3,4]
//agregar un valor al final
arreglonumeros.push(5);
console.log(arreglonumeros);
//elimina el ultimo elemento
arreglonumeros.pop();
console.log(arreglonumeros);
//agregar un elemento al inicio
arreglonumeros.unshift(0);
console.log(arreglonumeros);
//eliminar el primer elemento 
arreglonumeros.shift(0);
console.log(arreglonumeros);
//retorna un array entre dos indices
 let result = arreglonumeros.slice(1,3);
console.log(result);
*/

//Definicion del array incial

/*
let numeros = [1,2,3,4,5];
let colores =["rojo", "verde", "azul"];
let frutas = ["manzana", "platano", "naranja", "pera"];

console.log(frutas.length);

numeros.forEach((elemento, indice)=>{
  console.log(elemento, indice);
});

let arrNumeros = numeros.map((elemento)=>{
  return elemento;
});

let resultadoNumeros = numeros.filter((elemento)=> elemento > 5);

let resultadoFindNumeros = numeros.find((elemento)=> elemento == 1);
console.log(resultadoFindNumeros);
let resultadoFindIndexNumeros = numeros.findIndex((elemento)=> elemento == 3);
console.log(resultadoFindNumeros);

let resulFrutas = frutas.includes("manzana");
console.log(resulFrutas);

let resulFrutasSome = frutas.some((el)=> el == "banano");
console.log(resulFrutasSome);

*/
/*
const h1 = document.getElementById("h1element");

let newTexto = "Cambiado con javascript";

h1.textContent = newTexto;



const button = document.getElementById("button");

const hadleStyleButtom = () => {
  if (button.classList.contains("redButon")){
    button.classList.remove("redButon");

  } else {
    button.classList.add("redButon")
  }
};


button.addEventListener("click",()=> {
  console.log("El usuario hizo click");
  hadleStyleButtom();
})
*/

/*
const buttonInput = document.getElementById("buttonInputs");



const getDataInputs = ()=>{
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const email = document.getElementById("email").value;
  sessionStorage.setItem("datos", JSON.stringify({
    nombre,
    edad,
    email,
  })
);
  localStorage.setItem("datos", JSON.stringify({
      nombre,
      edad,
      email,
    })
  );
};

buttonInput.addEventListener("click",()=>{
  getDataInputs()
})

const buttonRecibir = document.getElementById("buttonRecibir").addEventListener("click",()=>{
  const result = localStorage.getItem("datos");
  const resultsession = sessionStorage.getItem("datos");
  console.log("local")
  if(result){
    console.log(JSON.parse(result));
  } else {
    console.log("los datos no existen");
}
console.log("SESSION")
if (resultsession){
  console.log(JSON.parse(result));
} else {
  console.log("los datos no existen");
}
});

*/

// Pedir al usuario su nombre utilizando prompt
let nombre = prompt("Por favor, introduce tu nombre:");

// Imprimir un saludo en la consola que incluya el nombre del usuario
console.log(`Hola, ${nombre}! Bienvenido.`);

// Declarar las variables a y b con valores numéricos
let a = 5;
let b = 10;

// Declarar la variable c como la suma de a y b
let c = a + b;

// Imprimir el resultado en la consola
console.log(`El valor de a es: ${a}`);
console.log(`El valor de b es: ${b}`);
console.log(`La suma de a y b es: ${c}`);


// Determinar cuál es el mayor
let mayor;

if (a >= b && a >= c) {
    mayor = a;
} else if (b >= a && b >= c) {
    mayor = b;
} else {
    mayor = c;
}

// Imprimir el resultado en la consola
console.log(`El mayor de los 3 números es: ${mayor}`);

// Función para verificar si el valor ingresado es un número entero válido
function esNumeroEntero(valor) {
  return !isNaN(valor) && parseInt(valor) == valor;
}

// Pedir al usuario un número utilizando prompt
let numeroIngresado;
let numero;

do {
  numeroIngresado = prompt("Por favor, introduce un número:");
  numero = parseInt(numeroIngresado);

  if (!esNumeroEntero(numeroIngresado)) {
      console.log("El valor ingresado no es un número válido.");
  }
} while (!esNumeroEntero(numeroIngresado));

// Determinar si el número es par o impar
if (numero % 2 === 0) {
  console.log(`El número ${numero} es par.`);
} else {
  console.log(`El número ${numero} es impar.`);
}


// Inicializar la variable en 10
let variable = 10;

console.log ("Cuenta Regresiva!")
// Usar un bucle while para restarle 1 en cada iteración hasta que la variable sea igual a 0
while (variable > 0) {
    console.log(` ${variable}`); 
    variable--;
}

// Imprimir el valor final de la variable
console.log(` ${variable}`);

// Usar un bucle do...while para pedirle al usuario que ingrese un número mayor a 100
do {
    numeroIngresado = prompt("Por favor, introduce un número mayor a 100:");
    numero = parseInt(numeroIngresado);

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un número válido.");
    }
} while (isNaN(numero) || numero <= 100);

// Mostrar el número ingresado en la consola
console.log(`El número mayor a 100 ingresado : ${numero}`);


console.log("¿Es par?")

// Función para verificar si el valor ingresado es un número entero válido
function esNumeroEntero(valor) {
  return !isNaN(valor) && parseInt(valor) == valor;
}

// Definir la función esPar
function esPar(numero) {
return numero % 2 === 0;
}

// Función para solicitar un número válido al usuario
function solicitarNumero(mensaje) {
  let numeroIngresado;
  let numero;

  do {
      numeroIngresado = prompt(mensaje);
      numero = parseInt(numeroIngresado);

      if (!esNumeroEntero(numeroIngresado)) {
          alert("El valor ingresado no es un número válido.");
      }
  } while (!esNumeroEntero(numeroIngresado));

  return numero;
}

// Pedir al usuario dos números utilizando prompt
let numero1 = solicitarNumero("Por favor, introduce el primer número:");
let numero2 = solicitarNumero("Por favor, introduce el segundo número:");

// Verificar si los números son pares o impares y mostrar el resultado en la consola
console.log(`El número ${numero1} es par: ${esPar(numero1)}`);
console.log(`El número ${numero2} es par: ${esPar(numero2)}`);



console.log("¡De Celsius a Fahrenheit!")

// Definir la función convertirCelsiusAFahrenheit
function convertirCelsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

// Pedir al usuario que ingrese un valor en grados Celsius utilizando prompt
let celsiusIngresado = prompt("Por favor, introduce un valor en grados Celsius:");
let celsius = parseFloat(celsiusIngresado);

// Verificar si el valor ingresado es un número válido
if (isNaN(celsius)) {
  console.log("El valor ingresado no es un número válido.");
} else {
  // Convertir el valor de Celsius a Fahrenheit
  let fahrenheit = convertirCelsiusAFahrenheit(celsius);

  // Mostrar el resultado en la consola
  console.log(`${celsius} °C son ${fahrenheit} °F`);
}

console.log("PERSONA")

// Definir el objeto persona con las propiedades nombre, edad y ciudad
let persona = {
  nombre: "Valen",
  edad: 21,
  ciudad: "Valencia",

  // Método para cambiar la ciudad de la persona
  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
  }
};


// Usar el método para actualizar la ciudad
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas en la consola
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);

console.log(" LIBRO ")

// Definir el objeto libro con las propiedades titulo, autor y año
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 2010,

  // Método para determinar si el libro tiene más de 10 años desde su publicación
  esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      return añoActual - this.año > 10;
  }
};

// Usar el método para determinar si el libro es antiguo o reciente
let esAntiguo = libro.esAntiguo();

// Mostrar el resultado en la consola
console.log(`El libro "${libro.titulo}" de ${libro.autor} es antiguo: ${esAntiguo}`);

// Declarar el array numeros con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Declarar un nuevo array para almacenar los resultados
let numerosMultiplicados = [];

// Usar un bucle para multiplicar cada número por 2 y almacenar los resultados en el nuevo array
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrar el array original y el nuevo array en la consola
console.log("Números originales:", numeros);
console.log("Números Multiplicados por 2:", numerosMultiplicados);



// Declarar un array vacío llamado pares
let pares = [];

// Usar un bucle for para iterar hasta 20 y agregar los primeros 10 números pares al array
for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

// Imprimir el array pares en la consola
console.log("Primeros 10 numeros pares:", pares);


// Función para cambiar el color de todos los elementos <p> a azul
function cambiarColorParrafos() {
  
  let parrafos = document.querySelectorAll('p');
  parrafos.forEach(function(parrafo) {
      parrafo.style.color = 'blue';
  });
}

document.getElementById('cambiarColorBtn').addEventListener('click', cambiarColorParrafos);

function mostrarAlerta() {
  let valorCampoTexto = document.getElementById('miCampoTexto').value;

  alert('Has ingresado: ' + valorCampoTexto);
}

document.getElementById('miBoton').addEventListener('click', mostrarAlerta);

//console.log("Ejercicio 1")

// Función para manejar el evento click en los elementos de la lista
function mostrarTexto(evento) {
  let texto = evento.target.textContent;
  console.log(texto);
}

// Seleccionar todos los elementos <li> en la lista
let elementosLista = document.querySelectorAll('#miLista li');

// Agregar un evento click a cada elemento <li>
elementosLista.forEach(function(elemento) {
  elemento.addEventListener('click', mostrarTexto);
});

// Función para deshabilitar el campo de texto
function deshabilitarCampoTexto() {
  let campoTexto = document.getElementById('miCampTexto');
  campoTexto.disabled = true;
  campoTexto.classList.add('deshabilitado');
}

// Función para habilitar el campo de texto
function habilitarCampoTexto() {
  let campoTexto = document.getElementById('miCampTexto');
  campoTexto.disabled = false;
  campoTexto.classList.remove('deshabilitado');
}

document.getElementById('deshabilitarBtn').addEventListener('click', deshabilitarCampoTexto);
document.getElementById('habilitarBtn').addEventListener('click', habilitarCampoTexto);

// Función para guardar el correo en localStorage
function guardarCorreo(evento) {
  evento.preventDefault(); // Evitar el envío del formulario
  let correo = document.getElementById('correo').value;
  localStorage.setItem('correo', correo);
  mostrarCorreoGuardado();
}

// Función para mostrar el correo guardado en el DOM
function mostrarCorreoGuardado() {
  let correoGuardado = localStorage.getItem('correo');
  let correoGuardadoDiv = document.getElementById('correoGuardado');

  if (correoGuardado) {
      correoGuardadoDiv.innerHTML = `<p>Correo guardado: ${correoGuardado}</p>
                                <button id="eliminarCorreoBtn">Eliminar</button>`;
      document.getElementById('eliminarCorreoBtn').addEventListener('click', eliminarCorreo);
  } else {
      correoGuardadoDiv.innerHTML = '';
  }
}

// Función para eliminar el correo de localStorage
function eliminarCorreo() {
  localStorage.removeItem('correo');
  mostrarCorreoGuardado();
}

// Añadir evento de envío al formulario
document.getElementById('correoFormulario').addEventListener('submit', guardarCorreo);

// Mostrar el correo guardado al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado);
