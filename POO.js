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
// POO + POLIMORFISMO

//Agregar al ejemplo anterior otro método (funcion)
ej

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
    ladrar () {
        if (this.raza == 'perro'){
            console.log('¡Wow!');
        }else {
            console.log('No puedo ladrar, soy un ' + this.raza);
        }
    }
}


perro.ladrar();
gato.ladrar();
pajaro.ladrar();

// POO + HERENCIA
//TOMA LA PRIMER CLASE CON TODO LO QUE PUEDE HACER Y LE AGREGA COSAS NUEVAS
//NO PUEDE HABER OBJETO CN MISMO NOMBRE DE LA CLASE

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

class perr extends animal {
    constructor (raza , age , color , pelaje){
        super(raza , age , color);
        this.pelaje = pelaje;
    }
    //Metodo estatico , no necesita que el metodo se defina para poder ser creado
    //Aqui indicaria waw!, pero si modificara el waw! por this.especie y
    // elimino la const perro1 , me daria undefined
    static ladrar(){
        console.log('Waw!');
    }
}

const perro1 = new perro ('dog' , 5 , 'brown' , 'large');
const gato1 = new animal ('cat' , 2 , 'black');

perro.verInfo();
gato.verInfo();


//metodo getters son para obtener un valor
//agregando dentro del extends

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

class perr extends animal {
    constructor (raza , age , color , pelaje){
        super(raza , age , color);
        this.pelaje = pelaje;
    }
    set modificarColor (newColor){
        this.color = newColor;
    }
    get getRaza(){
        return this.raza;
    }
}


console.log(perro2.getRaza);

//metodo setters son para modificarlo o definirlo


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

class perr extends animal {
    constructor (raza , age , color , pelaje){
        super(raza , age , color);
        this.pelaje = pelaje;
    }
    set modificarColor (newColor){
        this.color = newColor;
    }
}

const perro2 = new perro ('dog' , 5 , 'brown' , 'large');
const gato2 = new animal ('cat' , 2 , 'black');

perro2.modificarColor = 'White';

console.log(perro2.color);