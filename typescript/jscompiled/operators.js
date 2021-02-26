// Spread operator
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var fruits = ['apple', 'green apple', 'grapes'];
var food = ['Buns', 'Pizza', 'Burger'];
var edibles = __spreadArray(__spreadArray([], fruits), food);
console.table(edibles);
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log(add.apply(void 0, numbers));
// Destructure operator
var user = {
    firstName: 'Saranga',
    lastName: 'Buwaneka',
    getName: function () { return user.firstName + " " + user.lastName; }
};
var firstName = user.firstName; // destructuring an object
var lastName = user.lastName, getName = user.getName;
var fn = user.firstName, ln = user.lastName; // aliasing
console.log(firstName);
console.log(getName());
console.log(fn + " " + ln);
// ...Rest parameter
var apple = fruits[0], restFruits = fruits.slice(1);
console.log(apple);
console.log(restFruits);
