const magician = {
    _hat:'./assets/images/hat.png',
    _getPortrait(){
        if (this._portrait) return this._portrait;
        else return './assets/images/magician.png';
    },
    'do magic'(){
        console.log(`ABRACADABRA
        The prototype of ${this.name} is`);
        console.log(Object.getPrototypeOf(this));
    }
};

const human = new Human("Linda", "22", "human", "./assets/images/human.png", "doctor")
const vampire = new Vampire("Vlad", "915", "vampire", "./assets/images/human.png", "unemployed", "count")
const dog = new Dog("Fluffy", "3", "./assets/images/human.png", "dog", "brown")

function Human(name, age, species, _portrait, job){
    Creature.call(this, name, age, species, _portrait)
    this.job=job;
    this.sayHello = function(){
        console.log(`Hello, my name is ${this.name}!`)
    }
}
function Vampire(name, age, species, _portrait, job, title){
    Creature.call(this, name, age, species, _portrait)
    this.job=job;
    this.title = title;
    this.sayHello = function(){
        console.log(`Hello, my name is ${this.name}!`)
    }
}
function Dog(name, age, species, _portrait, color){
    Creature.call(this, name, age, species, _portrait)
    this.color = color;
    this.sayHello = function(){
        console.log(`Hello, my name is ${this.name}!`)
    }
}
function Creature(name, age, species, _portrait){
    this.name = name;
    this.age = age;
    this.species = species
    this._portrait = _portrait
}
console.log(Creature.prototype)
console.log(Human.prototype)
Human.prototype = Object.create(Creature.prototype)
console.log(vampire)
dog.sayHello()