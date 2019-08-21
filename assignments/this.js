/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding. Using 'this' in the global scope will bind to all objects in JavaScript

* 2. Implicit Binding. When calling a function by a proceeding dot, the object just left of the dot is 'this'

* 3. New Binding. When 'this' is used in a constructor function, 'this' refers to the specific instance of the object that is created and returned by the constructor function

* 4. Explicit Binding. By using the 'call' or 'apply' method, 'this' can be explicitly defined.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name){
    console.log(this);
    return name;
}
sayName();


// Principle 2

// code example for Implicit Binding


const fitness = {
    action: 'Running',
    activity: function(system) {
      console.log(`${this.action} is a great for ${system}`);
    }
  };
  fitness.activity('cardio');




// Principle 3

// code example for New Binding
function Music(genre){
    this.genres=genre;
    this.opinion=function(){
        console.log(`${genre} is the best`)
};
}

const rock = new Music('Rock');
const hiphop = new Music('Hip-Hop');

rock.opinion();
hiphop.opinion();


// Principle 4

// code example for Explicit Binding
