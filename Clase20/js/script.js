
const URL_API = 'https://rickandmortyapi.com/api/character';
const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/.json';


const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            console.log(response);

            for(let property in response ) {
                response[property]
                console.log(response[property])
            }
        }
    }
});


xhr.open("GET", URL_FIREBASE )
// xhr.open("POST", URL_FIREBASE )


xhr.send();


console.log(xhr);



response[property]


const object = {
    fruta: 'sandia',
    color: 'verde',
};

let property = 'color'

object[property]

objecto['fruta']

objeto.fruta



const test = {
    "koder1": {
        "lastName": "Krueger",
        "name": "Freddy"
    },
    "koder2": {
        "lastName": "jason",
        "name": "Freddy"
    },
    "koder3": {
        "lastName": "penny",
        "name": "Wise"
    }
}

// let property = 'koder3';

// test[property]