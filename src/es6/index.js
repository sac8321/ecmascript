function newFunction(name,age,country){
    var name = name || 'jorge';
    var age = age || '30';
    var country = country || 'CR';
    console.log(name,age,country);
}

//es6

function newFunction2(name = 'jorge' , age=32, country = 'CR'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('JUAN',23,'co');

let hello = "HELLO";
let world = "wORLD";
let epicPhrase = hello +' '+ world;
console.log(epicPhrase);


let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "esto es una prueba \n"
+ "otra frase que se ocupa";


//es6
let lorem2 = `quiero comer churros 
y tambien una hamburguesa`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'oscar' , 'age':32 ,'country':'mx'
}
console.log(person.name,person.age);

let {name} = person;
console.log(name);


let team1 = ['oscar','julian','ricardo'];
let team2 = ['valeria','yesica','camila'];

let edcucation = ['David',...team1,...team2];
console.log(edcucation);


{
    var globalVar = "Global var";
}

{
    let globalLet="Global let";
    console.log(globalLet);
}

console.log(globalVar);


const a = 'b';
a='a';
console.log(a);

let name = 'jorge';
let age =  23;
//es5
obj = {name:name , age:age};
//es6
obj2 = {name ,age};
console.log(obj2);

//arrowfunctions
//sintaxiis reducida

const names = [
    {name:'oscar',age:23},
    {name:'jorge',age:45}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name,age,country)=>{
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num*num;

//promesas , asincronismo

const helloPromise = () => {
    return new Promise((resolve,reject)=>{
        if(false){
            resolve('Hey!');
        }else{
            reject('Uops');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error));


//clases
//herencia en js

class calculator {
    //asignanar constructor
    constructor(){
        this.valueA = 0 ;
        this.valueB = 0 ;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA + this.valueB;
    }
}
//cono usar la clase en js
const calc = new calculator();
console.log(calc.sum(2,2));

//modulos
import {hello} from './module';
hello();

//generator
function* helloWorld() {
    if(true){
        yield 'Hello';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
