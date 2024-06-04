// Задача 1.
// Да се креира класа Animal која што ќе има барем две својства и два методи. 
// Потоа да се направи класа Dog која што ќе наследува од класата Animal. 
// Дополнително, класата Dog да има барем плус уште едно својство и уште еден метод. 
// Да се направат инстанци од двете класи и да се повикаат соодветните методи. 
// Својствата и методите ги дефинирате вие сами.

class Animal{
    constructor(name, species){
        this.name = name;
        this.breed = species;
    }
    sound(){
        return `${this.name} makes a sound.`;
    }
    info(){
        return `${this.name} is a ${this.species}.`;
    }
}
//extending the class "Animals"
class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, 'Dog');
        this.breed = breed;
        this.age = age;
    }

    bark() {
        return `${this.name} barks loudly!`;
    }

    info() {
        return `${this.name} is a ${this.age} year old ${this.breed}.`;
    }
}