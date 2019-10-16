/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW/GLOBAL OBJECT BINDING
`this` points to the window. it points to all of javascript since it is being called on in the global scope

* 2. IMPLICIT BINDING
`this` is bounded within a scope. When a function is called by a preceeding dot, the object before the dot is `this`

* 3. NEW BINDING
When `this` is used in a constructor function. `this` within the contstructor will point to the new object that is created later with the `new` keyword


* 4. EXPLICIT BINDING

Used with `call` or `apply`. `this` will refer to the overriden object

*


* write out a code example of each explanation above
*/

// Principle 1


// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const obj = {
    greeting: `Hola`, 
    sayHello: function(name){
        console.log(`${this.greeting} mi llamo es ${name}`)
    }
};
obj.sayHello(`Anthony`);

// Principle 3

// code example for New Binding

function Demon(name){
    this.name = name
    horns = true;
    tail = true;
    this.speak= function(){
        console.log(`Pay attention to meeeee. I am ${this.name}`)
    }
}

const myEx = new Demon("Jackie")
const otherEx = new Demon("Lindsey")
myEx.speak();
otherEx.speak();



// Principle 4

// code example for Explicit Binding

myEx.speak.call(otherEx);