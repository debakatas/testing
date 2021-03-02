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

import { findPerson, findPersonInCountry, sum } from '../src/utils';

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
describe('findPerson', function() {
    test('encuentra una persona mayor de edad', function() {
        expect(
            findPerson([
                { edad: 13, name: 'Cata' },
                { edad: 18, name: 'Maho' },
            ]).name
        ).toBe('Maho');

        expect(
            findPerson([
                { edad: 11, name: 'Lia' },
                { edad: 12, name: 'Terum' },
                { edad: 31, name: 'Kai' },
            ]).name
        ).toBe('Kai');
    });

    test('no encuentra una persona mayor de edad', function() {
        expect(
            findPerson([
                { edad: 13, name: 'Cata' },
                { edad: 11, name: 'Maho' },
            ])
        ).toBeUndefined();

        expect(
            findPerson([
                { edad: 11, name: 'Lia' },
                { edad: 12, name: 'Terum' },
                { edad: 17, name: 'Kai' },
            ])
        ).toBeUndefined();

        expect(findPerson([])).toBeUndefined();
    });
});

describe('findPersonInCountry', function() {
    test('encuentra una persona mayor de edad por pais', function() {
        expect(
            findPersonInCountry([
                { edad: 13, name: 'Cata', country: 'CA' },
                { edad: 18, name: 'Maho', country: 'US' },
                { edad: 18, name: 'Aang', country: 'CO' },
            ]).name
        ).toBe('Aang');

        expect(
            findPersonInCountry([
                { edad: 11, name: 'Lia', country: 'US' },
                { edad: 12, name: 'Terum', country: 'US' },
                { edad: 31, name: 'Kai', country: 'US' },
            ]).name
        ).toBe('Kai');

        expect(
            findPersonInCountry([
                { edad: 11, name: 'Lia', country: 'US' },
                { edad: 18, name: 'Terum', country: 'US' },
                { edad: 21, name: 'Katara', country: 'US' },
            ]).name
        ).toBe('Katara');
    });

    test('no encuentra una persona mayor de edad por pais', function() {
        expect(
            findPersonInCountry([
                { edad: 13, name: 'Cata', country: 'CO' },
                { edad: 19, name: 'Maho', country: 'US' },
            ])
        ).toBeUndefined();

        expect(
            findPersonInCountry([
                { edad: 17, name: 'Lia', country: 'CO' },
                { edad: 20, name: 'Terum', country: 'US' },
                { edad: 18, name: 'Kai', country: 'US' },
            ])
        ).toBeUndefined();

        expect(findPersonInCountry([])).toBeUndefined();
    });
});
