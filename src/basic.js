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
    },
    {
        edad: 20,
        nombre: 'Pedro',
    },
    {
        edad: 30,
        nombre: 'Maria',
    },
    {
        edad: 40,
        nombre: 'Timotina',
    },
];

let arraycitoNuevo = arraycito.map(function(elemento, index, array) {
    // return `${elemento} es el #${index}`;
    return {
        nombre: elemento,
        edad: (index + 1) * 10,
    };
});

let nombresPersonas = [];
personas.forEach(function(elemento) {
    nombresPersonas.push(elemento.nombre);
});

// map 1:1
console.log(nombresPersonas);
