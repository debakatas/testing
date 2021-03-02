const characters = [
    {
        age: 55,
        gender: 'male',
        media: ['tv', 'comic'],
        name: 'All Might',
        type: 'hero',
    },
    {
        age: 18,
        gender: 'female',
        media: ['videogame'],
        name: 'Chell',
        type: 'hero',
    },
    {
        age: 245000,
        gender: 'male',
        media: ['tv', 'movie', 'comic'],
        name: 'Doomsday',
        type: 'villain',
    },
    {
        age: Infinity,
        gender: 'male',
        media: ['comic', 'movie'],
        name: 'Dormammu',
        type: 'villain',
    },
    {
        age: Infinity,
        gender: 'male',
        media: ['tv'],
        name: 'Él',
        type: 'villain',
    },
    {
        age: 94,
        gender: 'male',
        media: ['tv', 'videogame'],
        name: 'Geralt de Rivia',
        type: 'hero',
    },
    {
        age: Infinity,
        gender: 'male',
        media: ['tv'],
        name: 'Goldar',
        type: 'villain',
    },
    {
        age: Infinity,
        gender: 'male',
        media: ['movie'],
        name: 'Hades',
        type: 'villain',
    },
    {
        age: 48,
        gender: 'male',
        media: ['tv', 'comic', 'movie', 'videogame'],
        name: 'Iron Man',
        type: 'hero',
    },
    {
        age: 78,
        gender: 'male',
        media: ['movie', 'tv'],
        name: 'Jafar',
        type: 'villain',
    },
    {
        age: 25,
        gender: 'male',
        media: ['tv', 'videogame'],
        name: 'Jeice',
        type: 'villain',
    },
    {
        age: 8,
        gender: 'female',
        media: ['tv', 'videogame'],
        name: 'Lisa Simpson',
        type: 'hero',
    },
    {
        age: 1052,
        gender: 'male',
        media: ['movie', 'tv', 'omic'],
        name: 'Loki',
        type: 'villain',
    },
    {
        age: 46,
        gender: 'female',
        media: ['movie'],
        name: 'Malefica',
        type: 'villain',
    },
    {
        age: 12,
        gender: 'female',
        media: ['videogame'],
        name: 'May',
        type: 'hero',
    },
    {
        age: 40,
        gender: 'male',
        media: ['movie', 'videogame'],
        name: 'Mr Incredible',
        type: 'hero',
    },
    {
        age: 56,
        gender: 'male',
        media: ['movie', 'comic'],
        name: 'Red Skull',
        type: 'villain',
    },
    {
        age: 15,
        gender: 'male',
        media: ['comic', 'tv'],
        name: 'Robin',
        type: 'hero',
    },
    {
        age: 25,
        gender: 'male',
        media: ['movie', 'videogame'],
        name: 'Syndrome',
        type: 'villain',
    },
    {
        age: 27,
        gender: 'male',
        media: ['tv'],
        name: 'Sportacus',
        type: 'hero',
    },
    {
        age: 8,
        gender: 'female',
        media: ['tv'],
        name: 'Stephanie',
        type: 'hero',
    },
    {
        age: 33,
        gender: 'male',
        media: ['tv', 'movie', 'comic', 'videogame'],
        name: 'Superman',
        type: 'hero',
    },
    {
        age: 43,
        gender: 'female',
        media: ['tv', 'movie', 'comic'],
        name: 'Storm',
        type: 'hero',
    },
    {
        age: Infinity,
        gender: 'male',
        media: ['tv', 'comic'],
        name: 'Trigon',
        type: 'villain',
    },
    {
        age: 2,
        gender: 'male',
        media: ['tv', 'movie', 'comic'],
        name: 'Ultron',
        type: 'villain',
    },
    {
        age: 42,
        gender: 'male',
        media: ['tv', 'movie', 'comic'],
        name: 'Venom',
        type: 'hero',
    },
    {
        age: 31,
        gender: 'male',
        media: ['movie'],
        name: 'Zurg',
        type: 'villain',
    },
];

export const books = {
    0: {
        title: 'En las montañas de la locura',
        available: 3,
        author: 'H.P. Lovecraft',
        cover: 'http://debakatas.com/cover/enlasmontanasdelalocura.jpg',
    },
    1: {
        title: 'Necronomicon',
        available: 3,
        author: 'Abdul Alhazred',
        cover: 'http://debakatas.com/cover/necronomicon.jpg',
    },
    2: {
        title: 'Codex Gigas',
        available: 3,
        author: 'Desconocido',
        cover: 'http://debakatas.com/cover/codex-gigas.jpg',
    },
    3: {
        title: 'Manuscrito Voynich',
        available: 3,
        author: 'Desconocido',
        cover: 'http://debakatas.com/cover/manuscrito-voynich.jpg',
    },
    4: {
        title: 'Memorias de una vida pasada',
        available: 3,
        author: 'Richard Webster',
        cover: 'http://debakatas.com/cover/vidas-pasadas.jpg',
    },
    5: {
        title: 'El libro de San Ciprino y Santa Justina',
        available: 3,
        author: 'San Ciprino',
        cover: 'http://debakatas.com/cover/grimorio-san-ciprino.jpg',
    },
    6: {
        title: 'Malleus Maleficarum',
        available: 3,
        author: 'Desconocido',
        cover: 'http://debakatas.com/cover/malleus-maleficarum.jpg',
    },
    7: {
        title: 'Codex Seraphinianus',
        available: 3,
        author: 'Luigi Serafini',
        cover: 'http://debakatas.com/cover/codex-seraphinianus.jpg',
    },
    8: {
        title: 'Código de Copiale',
        available: 3,
        author: 'La Altamente Iluminada Sociedad Oculista',
        cover: 'http://debakatas.com/cover/copiale-cipher.jpg',
    },
    9: {
        title: 'El gran grimorio del Papa Honorio',
        available: 3,
        author: 'Papa Honorio',
        cover: 'http://debakatas.com/cover/grimorio-papa-honorio.jpg',
    },
    10: {
        title: 'El Palimpsesto de Arquímedes',
        available: 3,
        author: 'Arquímedes',
        cover: 'http://debakatas.com/cover/palimpsesto-arquimedes.jpg',
    },
    11: {
        title: 'Masticatione Mortuorum in Tumulis',
        available: 3,
        author: 'Michael Ranft',
        cover: 'http://debakatas.com/cover/masticatione-mortuorum.jpg',
    },
    12: {
        title: 'Lemegeton Clavicula Salomonis',
        available: 3,
        author: 'Salomón',
        cover: 'http://debakatas.com/cover/lemegeton-clavicula-salomonis.jpg',
    },
    13: {
        title: 'Codex Rohonzi',
        available: 3,
        author: 'Viorica Enachiuc',
        cover: 'http://debakatas.com/cover/rohonzi-codex.gif',
    },
    14: {
        title: 'Steganographia',
        available: 3,
        author: 'Johann von Heidenberg',
        cover: 'http://debakatas.com/cover/steganographia.jpg',
    },
    15: {
        title: 'La maldición de Hill House',
        available: 3,
        author: 'Shirley Jackson',
        cover: 'http://debakatas.com/cover/madicion-hill-house.jpg',
    },
};

export const numbers = [1, 12, 4, 1231, 13, 645, 44, 66, 867];

export const people = [
    [
        {
            id: '5f408965bc16e51a844eae6c',
            age: 28,
            eyeColor: 'green',
            name: {
                first: 'Cantu',
                last: 'Carroll',
            },
        },
        {
            id: '5f408965e76c5dac326ecf7f',
            age: 33,
            eyeColor: 'blue',
            name: {
                first: 'Corine',
                last: 'Navarro',
            },
        },
        {
            id: '5f408965ec32ffb2cae9ccc8',
            age: 38,
            eyeColor: 'blue',
            name: {
                first: 'Riddle',
                last: 'Cobb',
            },
        },
        {
            id: '5f40896581f733d4e9253401',
            age: 24,
            eyeColor: 'green',
            name: {
                first: 'Wilson',
                last: 'Craig',
            },
        },
        {
            id: '5f408965f2fcf9e94a67da22',
            age: 26,
            eyeColor: 'blue',
            name: {
                first: 'Dena',
                last: 'Hewitt',
            },
        },
        {
            id: '5f408965f2a6d8602118f0c6',
            age: 27,
            eyeColor: 'blue',
            name: {
                first: 'Fern',
                last: 'Serrano',
            },
        },
        {
            id: '5f408965d8dbc7e5b1d2fb7c',
            age: 22,
            eyeColor: 'blue',
            name: {
                first: 'Garner',
                last: 'Jennings',
            },
        },
        {
            id: '5f4089654255a053b9a8fa6a',
            age: 21,
            eyeColor: 'brown',
            name: {
                first: 'Tamera',
                last: 'Daugherty',
            },
        },
        {
            id: '5f408965a926105e1528d32d',
            age: 33,
            eyeColor: 'brown',
            name: {
                first: 'Horn',
                last: 'Woodward',
            },
        },
        {
            id: '5f40896583f534b90b3206d4',
            age: 23,
            eyeColor: 'blue',
            name: {
                first: 'Bonita',
                last: 'Whitney',
            },
        },
    ],
];
