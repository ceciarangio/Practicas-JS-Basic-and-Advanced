"use strict";

// POO - PROGRAMACION ORIENTADA A OBJETOS 

class animal {
    constructor (raza , age , color){
        this.raza = raza;
        this.age = age;
        this.color = color;
        this.info = 'I ${this.raza}, have ${this.age} years old and i am color ${this.color}'
    }
    verInfo(){
        console.log(this.info + "<br>")
    }
}

const perro = new animal ('dog', 5 , 'brown');
const gato = new animal ('cat' , 2 , 'black');
const pajaro = new animal ('bird' , 1 , 'green');

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

// ----------------------------------------

