interface Human {
    readonly age: number;
    walk(): void;
}

interface Person extends Human{
    firstName: string;
    lastName?: string;
}

// Using interface for objects

const user: Person = {
    firstName: 'Saranga',
    lastName: 'Buwaneka',
    age: 55,
    walk: () => console.log('Walking')
};

// Using interfaces for classes

class Employee implements Person {
    
    firstName: 'Saranga';
    age: 12;

    walk() {
        return;
    }
}