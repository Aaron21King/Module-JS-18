/*const generacion18 = [
    {
      signature: "Js",
      koders: ["Ivan", "Freddy"],
      mentor: "Ivan Diaz"
    },
    {
      signature: "HTML",
      koders: ["Jason", "Penny", "Freddy"],
      mentor: "Alan "
    },
    {
      signature: "CSS",
      koders: ["Arnold", "Gerald"],
      mentor: "David "
    },
    {
      signature: "Introduccion",
      koders: ["Steve", "Charlie"],
      mentor: "Elvira "
    },
    {
      signature: "React",
      koders: ["Ivan", "Harry", "Freddy"],
      mentor: "Alejandra"
    }
  ];

let nombres = []
const saludar = (name) => {
    nombres.push(name)
};

saludar('ivan')


const filtrarPorMateria = (materia) =>{
    let result = '';

    for (let index = 0; index < generacion18.length; index++) {
        if(materia === generacion18[index].signature){
            result = generacion18[index];
        }
        
    }
    return result;
}

console.log(filtrarPorMateria('Js'))*/


/*Ejercicio 1

input 
[
  'Jason Vorhees',
  'Penny Wise',
  'Freddy Krueger',
]

output: 
[
  'koder 1: Jason Vorhees'
  'koder 2: Penny Wise',
  'koder 3: Freddy Krueger',
]*/


/*let estudiantes =['Jason Vorhees', 'Penny Wise', 'Freddy Krueger']

let usuarios =[]
let numero =1
estudiantes.forEach((item, index, arr)=>{
  info=('koder'+ (index+1) +': '+item);
  usuarios.push(info)
})

console.log(usuarios)*/




/*Ejercicio 2

input:
[
  {
    koder: 'Arnold',
    score: 8,
  },
  {
    koder: 'Gerald',
    score: 8,
  },
  {
    koder: 'Gelga',
    score: 8,
  },
  {
    koder: 'Peer',
    score: 8,
  },
  {
    koder: 'Thomas',
    score: 8,
  }
];*/


/*<60 F
<70 D
<80 C
<90 B
<100 A


output: {
  promedio del grupo: 90
  calificacion del grupo: A
}*/
let calificaciones =[
  {
    koder: 'Arnold',
    score: 9,
  },
  {
    koder: 'Gerald',
    score: 8,
  },
  {
    koder: 'Gelga',
    score: 10,
  },
  {
    koder: 'Peer',
    score: 8,
  },
  {
    koder: 'Thomas',
    score: 10,
  }
];

let promedio = 0;
let personas = calificaciones.length;

calificaciones.forEach((item,index,arr)=>{
  calif = calificaciones[index].score
  promedio += calif

})
let promedioGeneral = (promedio/personas)
console.log(Number(promedioGeneral))

function resultadoP(promedioGeneral){
  if(promedioGeneral == 6){
    console.log('TU calificacion es F')
  }
  else if(promedioGeneral == 7){
    console.log('TU calificacion es D')
  }
  else if(promedioGeneral == 8){
    console.log('TU calificacion es C')
  }
  else if(promedioGeneral == 9){
    console.log('TU calificacion es B')
  }
  else if(promedioGeneral == 10){
    console.log('TU calificacion es A')
  }
}

resultadoP(promedioGeneral)