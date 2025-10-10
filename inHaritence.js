//basic inheritance
class Dog {
    constructor(name){
        this.name = name;
    }
    bark(){
        console.log('Woof Woof');
    }
}

class Labrador extends Dog{
    constructor(name, color){
        super(name);
        this.color = color;
    }
    labInfo(){
        console.log(`Labrador Name: ${this.name}, Color: ${this.color}`);
    }
}

const labrador1 = new Labrador('Buddy', 'Yellow');
labrador1.bark();
labrador1.labInfo();
console.log(labrador1);