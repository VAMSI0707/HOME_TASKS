/*
DESCRIPTION:
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5] 
*/
Array.prototype.square = function () {
    return this.map((item) => Math.pow(item, 2));
}
Array.prototype.cube = function () {
    return this.map((item) => Math.pow(item, 3));
}
Array.prototype.average = function () {
    return this.sum() / this.length;
}
Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
}
Array.prototype.even = function () {
    return this.filter((item) => item % 2 == 0);
}
Array.prototype.odd = function () {
    return this.filter((item) => item % 2 != 0);
}

/*
DESCRIPTION:
You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.

Rules
The SantaClausable interface is implemented, if all of the following methods are defined on an object:

sayHoHoHo() / say_ho_ho_ho
distributeGifts() / distribute_gifts
goDownTheChimney() / go_down_the_chimney
Example
var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
*/
function isSantaClausable(obj) {
    // TODO
    let objMethods = ["sayHoHoHo", "distributeGifts", "goDownTheChimney"];
    for (let method of objMethods) {
        if (typeof obj[method] !== "function") {
            return false;
        }
    }
    return true;
}

/*
DESCRIPTION:
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/
Object.prototype.hash = function (string) {
    const objProperties = string.split(".");
    let name = this;
    for (let i = 0; i < objProperties.length; i++) {
        if (!name) {
            return name;
        }
        name = name[objProperties[i]];
    }
    return name;

}
/*
DESCRIPTION:
In JavaScript we can create objects using the new operator.

For example, if you have this constructor function:

function Greeting(name) {
  this.name = name;
}

Greeting.prototype.sayHello = function() {
  return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
  return "Bye " + this.name;
};
You can create a Greeting object in this way:

var greeting = new Greeting('John');
*/
function construct(Class, ...args) {
    return new Class(...args);
}



