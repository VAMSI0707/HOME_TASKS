/*
Prefill an Array
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

Code Examples

    prefill(3,1) --> [1,1,1]
    
    prefill(2,"abc") --> ['abc','abc']
    
    prefill("1", 1) --> [1]
    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
*/
function prefill(n, v) {
    if (!Number.isInteger(n) || !Number.isFinite(n) || !(n >= 0))
        throw new TypeError(n + " is invalid");
    return fillArray(n, v || undefined);
}
function fillArray(n, v) {
    if (n == 0) {
        return [];
    }
    else {
        return [v].concat((fillArray(n - 1, v)));
    }
}

/*
Can you keep a secret?
DESCRIPTION:
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2

*/
function createSecretHolder(secret) {
    let _secret = secret;
    return {
        setSecret: function (s) {
            _secret = s;
        },
        getSecret: function () {
            return _secret;
        }
    }
}

/*
Closures and Scopes
DESCRIPTION:
We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available
Given function-
function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}
*/
function createFunctions(n) {
    var callbacks = [];
    for (let i = 0; i < n; i++) {
        callbacks.push(function () {
            return i;
        });
    }
    return callbacks;
}

/*
A function within a function
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
var three = always(3);
three(); // returns 3
*/
function always(n) {
    return function () {
        return n;
    }
}



