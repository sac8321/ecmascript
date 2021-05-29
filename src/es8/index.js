
const data = {
    frontend:'Oscar',
    backend:'Esther',
    desing:'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object Various
const data ={
    frontend:'Oscar',
    backend:'Esther',
    desing:'Ana'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//pading , como agregar cadena vacia o elementos a este string
const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(7,'hi'))

const obj = {
    name:'osar',
}
console.log(Object.values(obj));



//Asyn Await

const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (false)
        ? setTimeout(()=>resolve('Hello World'),3000)
        :reject(new Error('Test error'))
    })
};

const helloAsync = async()=>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async()=>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}



