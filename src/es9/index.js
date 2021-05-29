//operador de reposo trae propieades de objeto que aun no se construye

const obj ={
    name:'oscar',
    age:32,
    country:'mx'
};

let {country, ...all}=obj;
console.log(all);

const obj = {
    name: 'Oscar',
    age: 32
}

const obj1 = {
    ...obj,
    country:'MX'
}

console.log(obj1);

//saber cuando termina el llamado y correr la l[ogica] del codigo

const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('HelloWorld'),3000)
        : reject(new Error('Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//como agrupar bloques de regex y accder a ellos
const regexData  = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day);

