// Special and Reference types
// - void
function logToConsole(input) {
    console.log(input);
}
// - Array
var fruits;
fruits = ['Apple', "Orange", "Peach"];
var food = ['Pizza', 'Burger', 'Spring roll'];
var genericArray;
genericArray = ['String', 123, false];
logToConsole('Hello Worldd\n');
fruits.forEach(function (f) { return console.log(f + "\n"); });
food.forEach(function (foo) { return console.log(foo + "\n"); });
genericArray.forEach(function (g) { return console.log(g + "\n"); });
// - Tuples
var coordinates; // accepts only declared type values and same number of values
coordinates = [12, 21, 32];
var generic; // generic tuples also possible
generic = ["djfhskj", 2];
// - Objects
var user = {
    firstName: 'Saranga',
    lastName: 'Buwaneaka',
    username: 'bsaranga',
    age: 28
};
console.log(user.age);
// - Enums
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["Monday"] = 0] = "Monday";
    DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 3] = "Thursday";
    DaysOfTheWeek[DaysOfTheWeek["Friday"] = 4] = "Friday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.Friday;
console.log(day);
// - Any
