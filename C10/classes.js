// clasele sunt relaviv noi in js dar ele sunt antice in lumea programarii - anii 80;
// object oriented programing
// ne permite sa abstractizam ceva complicat in cod simplu

const hoodie = {
    color: "blue",
    isClosed:true,
    zip: () => !isClosed,
};

consthoodieButDifferent = {
    shadow:"black",
    isRipped: false,
    rip:() => !isRipped,
};

//clasele ofera un sablon

class Animal {
    constructor (name){
        this.name = name;
        this.thirst = 100;
        this.belly = [];

    }


drink (){
    this.thirst = this.thirst-10;
    return this.thirst;
};

eat(food) {
    this.belly.push(food);
    return this.belly;
    };
};


const elephant = new Animal ("Dumbo");

console.log( elephant.name);
elephant.drink();
console.log(elephant.thirst);

elephant.eat("peanuts");
console.log (elephant.belly);

class Wolf extends Animal {
    constructor ( fur, isInPack, name) {
        super(name);
        this.fur = fur;
        this.isInPack = isInPack;
    };

isLoneWolf() { 
    return this.isInPack;
    };
};

const coltAlb =  new Wolf ("white", false, "Colt Alb");
console.log(coltAlb.name, coltAlb.belly);

coltAlb.eat ("rabbit");
console.log(coltAlb.belly);



class Dog {
    constructor(name, breed){
        this.name = name; // fields
        this.breed = breed; // fields
    }  //metoda obligatorie!!! - folosit pentru a initializa obiectele de aceeasi clasa; MANDATORY - here is how we initialize a class;

    bark(){
        console.log(`Bark Bark! My name is ${this.name}`);
    }
    
    static info(){
        console.log ("A dog is better than a cat") // or not really.
    } // metode care apartine la toate instantele
}
const azorel = new Dog ("Azorel", "German Sheppard"); // this is an instance of dog
const lessy = new Dog ("Lessy", "Collie cu par lung") // this is another instance of dog

console.log(azorel.breed);
console.log(lessy.name, lessy.breed);

azorel.bark();
lessy.bark();

Dog.info();

//this este diferit pt fiecare caine; fiecare caine se numeste o instanta a clasei caine;

//programare orientata pe obiect

