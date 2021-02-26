class Person {

    constructor(private firstName: string, private lastName: string, private age: Number) {} // shorthand assignment of properties

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    getInfo(): string {
        return `${this.firstName} ${this.lastName} is ${this.age} yrs old`
    }
}

const jerome: Person = new Person('Jerome', 'Felix', 26);
console.log(jerome.getFullName());
console.log(jerome.getInfo());

class Employee extends Person {
    
    public get employeeId() : number {
        return this.id
    }
    
    public set employeeId(employeeId : number) {
        this.id = employeeId;
    }
    
    constructor(
        private id: number,
        firstName: string,
        private middleName: string,
        lastName: string,
        age: number
    ) {
        super(firstName, lastName, age);
    }

    getFullName(): string {
        const nameSegments: Array<string> = super.getFullName().split(' ');
        nameSegments.splice(1, 0, this.middleName);
        const fullName: string = nameSegments.join(' ');
        return fullName;
    }
}

const manager: Employee = new Employee(1, 'John', 'Man', 'Doe', 19);

console.table(manager);
console.log(manager.getFullName());

manager.employeeId = 3;
console.log(manager.employeeId);