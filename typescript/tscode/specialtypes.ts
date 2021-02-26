// Special and Reference types

// - void

function logToConsole(input: string): void {
    console.log(input);
}

// - Array

let fruits: string[];
fruits = ['Apple', "Orange", `Peach`];

let food: Array<string> = ['Pizza', 'Burger', 'Spring roll'];

let genericArray: Array<string | number | boolean>;
genericArray = ['String', 123, false];

logToConsole('Hello Worldd\n');

fruits.forEach(f => console.log(`${f}\n`));
food.forEach(foo => console.log(`${foo}\n`));
genericArray.forEach(g => console.log(`${g}\n`));

// - Tuples

let coordinates: [number, number, number]; // accepts only declared type values and same number of values
coordinates = [12, 21, 32];

let generic: [number|string, number]; // generic tuples also possible
generic = ["djfhskj", 2];

// - Objects

let user: 
    {
        firstName: string,
        lastName: string,
        username: string,
        age: number,
    } = 
    {
        firstName: 'Saranga',
        lastName: 'Buwaneaka',
        username: 'bsaranga',
        age: 28
    }

console.log(user.age);

// - Enums

enum DaysOfTheWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

let day: DaysOfTheWeek;
day = DaysOfTheWeek.Friday;

console.log(day)

// - Any

