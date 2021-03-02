import {
    janKenPonFigures,
    books,
    cardOrder,
    cardSigns,
    characters,
    movies,
    numbers,
    people,
} from './data';

// length
export const maxItems = (arr, num) => {};

// every
export const canAllDrink = (arr) => {};

// some
export const canSomeoneDrink = (arr) => {};

// filter
export const characterFilter = () => {};

// some;
export const isIsogram = (str) => {};

// rduce
export const oddAndEven = (arr) => {};

// fill
export const countSheep = (num) => {};

// redce
export const scoreAverage = (arr) => {};

// reduce + forEach
export const moreCommonWord = (str, backList) => {};

// Object.entries()
export const findInObj = (obj, id) => {};

// indexOf() + Math.random()
export const janKenPo = (arr) => {};

// pipe
export const palindro = (str) => {};
export const cesarCodex = (st, shift) => {};

// Matrix
export const matrixLetter = (leter, num) => {};

export function sum(val1, val2) {
    return Number(val1) + Number(val2);
}

export function findPerson(elementico) {
    let mayorEdad = elementico.find(function(elemento, index, array) {
        return elemento.edad >= 18;
    });
    return mayorEdad;
}
// export function findPersonInCountry() {}
export function findPersonInCountry(personas) {
    let mayor = personas.find(function(elemento, index) {
        if (elemento.edad >= 21 && elemento.country === 'US') {
            return true;
        }

        if (elemento.edad >= 18 && elemento.country !== 'US') {
            return true;
        }

        return false;
    });
    return mayor;
}

export function findCharacters(array, minAge, media) {}

findCharacters([], 22, 'comic'); // [...]

// Truthy
// -1 'false' true [] {}

// Falsy
// 0 '' NaN null undefined false

// crear una funcion (utils.js)
// toma cualquier array de objetos
// crea un texto "name" de "year"
// ["Primer de 2004", "Triangle de 2009"]

// crear test (utils.test.js)
// Usen como prueba la informacion en "data.js"
