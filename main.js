import {halfOf, multiply} from './lib.js';
console.log(halfOf(84));
console.log(multiply(21, 2));

/* import doSomething from './doSomething.js';
doSomething(); */

/* import { flag, touch } from './validator.js';
console.log(flag);
touch();
console.log(flag); */


/* class Vehicle 
{
    constructor(wheels) 
    {
        this.wheels = wheels;
    }

    toString() 
    {
        return '(' + this.wheels + ')';
    }
}

class Car extends Vehicle 
{
    constructor(color) 
    {
        super(4);
        this.color = color;
    }

    toString() 
    {
        return super.toString() + ' colored: ' + this.color;
    }
}
    let car = new Car('blue');
    car.toString();

    console.log(car instanceof Car);
    console.log(car instanceof Vehicle); */



/* Default Feature */
/* function add(x, y = 0) {
    console.log(x + y);
    }
    add(1);
    add(1,2); */


/* Rest Feature */
/* function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + 'friends');
    }
    userFriends('User', 'Bob', 'Alice'); */
    

/* Spread Feature */
/* function userTopFriends(firstFriend, secondFriend,
    thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
    }
    userTopFriends(...['Alice', 'Bob', 'Michelle']); */
    

/* JavaScript Closures */
/* function parent() {
    const message = 'Hello World';
    function child() {
    alert (message);
    }
    child();
    }
    parent(); */
    

/* function parent() {
    const message = 'Hello World';
    function child() {
    alert (message);
    }
    return child;
    }
    const childFN = parent();
    childFN();
    */ 