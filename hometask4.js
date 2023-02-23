/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:


var complexFunction = function(arg1, arg2) {  complex calculation in here  };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar');  complex function should be executed
cachedFunction('foo', 'bar'); complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz');  should be executed, because the method wasn't invoked before with these arguments
*/
function cache(func) {
    // do your magic here
    const funcMap = new Map();
    return function (...args) {
        let key = JSON.stringify(...args);
        if (funcMap.has(key)) {
            return funcMap.get(key);
        }
        const result = func.apply(this, args);
        funcMap.set(key, result);
        return result;
    }
}

/*
Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well here, but this is my explanation, in simple mathematical notation:

f3 = compose( f1 f2 )
   Is equivalent to...
f3(a) = f1( f2( a ) )
Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!

compose(f , g)(x)
=> f( g( x ) )
This kata is not available in haskell; that would be too easy!
*/
function compose(f, g) {
    return function (...args) {
        return f(g(...args));
    }
}

/*
Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c))

addOneMultTwo(5) // returns 12
Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function which does the heavy lifting of combining functions for you. So you could implement addOneMultTwo as follows:

const addOneMultTwo = compose(multTwo, addOne)

addOneMultTwo(5) // returns 12
A simple implementation of compose, could work as follows:

const compose = (f, g) => (a) => f(g(a))
The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.

*/
function compose() {
    // Your solution
    const funcs = arguments;
    const funcLength = funcs.length;
    return function (input) {
        let result = input;
        for (let i = funcLength - 1; i >= 0; i--) {
            result = funcs[i](result);
        }
        return result;
    }
}

/*
In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20
But that's not all. Cats can change weight. Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:

felix.weight = 25;
felix.weight // 25
Cat.averageWeight(); // now 25
Object.defineProperty must be used to pass all tests. Storing a reference to all instances and recalculating the average weight each time is easier, but would prevent garbage collection from working properly if used in a production environment.

Finally, since average weight is an aggregate statistic it's important that we validate constructor arguments so that no cats are created without a specified weight; so, make sure to throw an error if both arguments are not recieved by the constructor.

Summary of requirements:
Cat constructor, requiring arguments for name and weight
Throw an error if name or weight not specified when invoking the constructor.
Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
Must use Object.defineProperty
*/
var Cat = (function () {
    let totalWeight = 0;
    let catCount = 0;
    catInstance.averageWeight = function () {
        return totalWeight / catCount;
    }
    function catInstance(name, weight) {
        if (!name || !weight)
            throw new Error();
        this.name = name;
        totalWeight += weight;
        catCount++;
        Object.defineProperty(this, 'weight', {
            get() {
                return weight;
            },
            set(newWeight) {
                totalWeight = totalWeight - weight + newWeight;
                weight = newWeight;

            },
            ennumberable: true

        });
    }
    return catInstance;
}());

/*
DESCRIPTION:
We want to create a function that will add numbers together when called in succession.

add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
and so on.

A single call should be equal to the number passed in.

add(1); // == 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
We can assume any number being passed in will be valid whole number.
*/
function add(a) {
    // Let the currying begin!
    const addB = (b) => (add(a + b));
    addB.toString = () => (a);
    return addB;
}