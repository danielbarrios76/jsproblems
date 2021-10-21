/*
example program object in js
only say message in console log
*/

const greeting = {
    name: '?', //no name
    sayHi: () => console.log('Hi, ${greeting.name}')
}


//run
greeting.sayHi();

greeting.name = 'Thomas';
greeting.sayHi();
