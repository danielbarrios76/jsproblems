/*
example program object in js
*/

const greeting = {
    name: '',
    sayHi: () => console.log('Hi, ${greeting.name}')
}

greeting.sayHi();

greeting.name = 'Thomas';
greeting.sayHi();
