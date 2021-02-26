// import {
//     canAllDrink,
//     canSomeoneDrink,
//     cesarCodex,
//     characterFilter,
//     findInObj,
//     isIsogram,
//     matrixLetter,
//     maxItems,
//     moreCommonWord,
//     oddAndEven,
//     palindro,
//     scoreAverage,
//     countSheep,
// } from '../src/utils';

import { sum } from '../src/utils';

// Test Suites (it | test)
describe('sum', function() {
    // Casos de prueba
    // Sumo dos numeros, me da el resultado
    // Tests
    test('sums two numbers', function() {
        expect(sum(1, 1)).toBe(2);
        expect(sum(10, -11)).toBe(-1);
        expect(sum(-10, -11)).toBe(-21);
    });

    // Test Driven Developement
    test('sums with letters', function() {
        expect(sum('10.2', 10)).toBe(20.2);
        expect(sum(10, '10')).toBe(20);
        expect(sum('10', '10')).toBe(20);
        expect(sum(0, '1')).not.toBe(null);
    });
});

describe('formateadorPeliculs', function() {
    test('funciona', function() {
        console.log('hola');
        expect(1).toBe(3);
    });
});

// test;
// it;
// describe;

// expect;
