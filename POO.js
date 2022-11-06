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

//EJERCICIO
//QUIERO COMPRAR UN MOVIL, 1) MOSTRAR LAS PARTICULARIDADES DE 3 MOVILES,
// 2) CADA UNO DEBE TENER COLOR, PESO , RESOLUCION PANTALLA Y CAMARA Y RAM
// 3) DEBEN PODER PRENDER, REINICIAR, TOMAR FOTOS Y GRABAR

class moviles {
    constructor(color , peso , rdp , rdc , ram){
        this.color = color;
        this.peso = peso;
        this.rdpantalla = rdp;
        this.rdcamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    prender(){
        if (this.encendido = false) {
            console.log('movil encendido');
            this.encendido = true;
        }else {
            console.log('el movil esta apagado');
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            console.log('reiniciando movil');
        }else {
            console.log('el movil esta apagado');
        }
    }
    tomarFotos(){
        console.log('foto tomada en resolucion de: ' + (this.rdpantalla))
    }
    grabarVideo(){
        console.log('grabando video en ' + (this.rdccamara))
    }
    mostrarInfo(){
        return 'Color: ' +  (this.color ) + 'Peso: ' +  (this.peso ) + 'Resol camara: ' +  (this.rdpantalla) + 'Resol video: ' +  (this.rdcamara) + 'Memoria Ram: ' +  (this.ram);
    }
}

// movil1 = new moviles('red' , '150gr' , '5px' , 'full hd' , '2gb');
// movil2 = new moviles('black' , '120gr' , '10px' , 'full hd' , '4gb');
// movil3 = new moviles('grey' , '130gr' , '15px' , 'hd' , '6gb');

// movil1.prender();
// movil1.tomarFotos();

// console.log(movil1.mostrarInfo());
// console.log(movil2.mostrarInfo());

//IMPLEMENTAR ESTOS ELEMENTOS EN MOVILES DE ALTA GAMA
//Agregar mejores caracteristiscas, grabar en cam lenta, reconocim facial y camara extra

class movilAltaGama extends moviles {
    constructor(color, peso, rdpantalla, rdcamara, ram, rdce){
        super(color,peso,rdpantalla,rdcamara,ram);
        this.resolCamExtra = rdce;
    }
    grabarVideo(){
        console.log('grabando en camara lenta');
    }
    reconocimFacial(){
        console.log('inicia reconocim facial');
    }
    mobileInfo(){
        return (this.mostrarInfo) + ( 'resol de cam extra ' + (this.resolCamExtra));
    }
}

movilag1 = new movilAltaGama('red' , '130gr' , '5.2' , '4k' , '3gb' , 'full hd');

console.log(movilag1.mobileInfo());