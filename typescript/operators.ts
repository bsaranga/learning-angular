// Spread operator

let fruits: Array<string> = ['apple', 'green apple', 'grapes'];
let food: string[] = ['Buns', 'Pizza', 'Burger'];
let edibles: Array<string> = [...fruits, ...food];

console.table(edibles);

function add(x?: number, y?:number, z?:number): number {
    return x + y + z;
}

let numbers: Array<number> = [1,2,3];

console.log(add(...numbers));

// Destructure operator

let user = {
    firstName: 'Saranga',
    lastName: 'Buwaneka',
    getName: (): string => `${user.firstName} ${user.lastName}`
}

let { firstName } = user; // destructuring an object
let { lastName, getName } = user;
let { firstName: fn, lastName: ln} = user; // aliasing

console.log(firstName);
console.log(getName());
console.log(`${fn} ${ln}`);

// ...Rest parameter

let [apple, ...restFruits] = fruits;

console.log(apple);
console.log(restFruits);