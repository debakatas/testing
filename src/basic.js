// Length
[1, 2, 3, 34, 4, 4, 4].length;

// includes
[1, 2, 3].includes(21);

// push
let myArray = [1];
myArray.push(2);

// for
let arraycito = ['Nata', 'Jefry', 'Cata', 'Shali', 'Nico'];

for (let index = 0; index < arraycito.length; index += 1) {
    const element = arraycito[index];
}

// For of +sencillo -index
for (const element of arraycito) {
    // console.log(`Yo quiero a ${element}`);
}

// funciones que viven en los prototipos
// reciben una funcion (callback)
arraycito.forEach(function(elemento, index, array) {
    // console.log(array);
});

// For each no deberia tener return
Object.keys({ hola: 'hola!!!!' }).forEach(function(elemento) {
    // console.log(`La llave es ${elemento}`);
});

// Map siempre debe tener return
let personas = [
    {
        edad: 10,
        nombre: 'Juan',
        country: 'ES',
    },
    {
        edad: 20,
        nombre: 'Pedro',
        country: 'US',
    },
    {
        edad: 30,
        nombre: 'Maria',
        country: 'CO',
    },
    {
        edad: 40,
        nombre: 'Timotina',
        country: 'US',
    },
];

let arraycitoNuevo = arraycito.map(function(elemento, index, array) {
    // return `${elemento} es el #${index}`;
    return {
        nombre: elemento,
        edad: (index + 1) * 10,
    };
});

// 1:1

let nombresPersonas = [];
personas.forEach(function(elemento) {
    nombresPersonas.push(elemento.nombre);
});

// map 1:1

const numeros = [1, 23, 34, 2, 3, 5];

// Soy el mejor!
let numerosDoble = numeros.map(function(elemento) {
    return elemento * 2;
});

let numerosDOble2 = [];
numeros.forEach(function(element) {
    numerosDoble.push(element * 2);
});

// Se detiene cuando es True o se acaba los elementos
// find Devuelve un solo elemento
// findIndex Devuelve un numero (el indice)
let encontrado = arraycitoNuevo.findIndex(function(elemento, index, array) {
    return elemento.nombre.length > 4;
});

// Devuelve un array
let todos = arraycitoNuevo.filter(function(elemento) {
    return elemento.nombre.length > 4;
});

console.log(todos);
