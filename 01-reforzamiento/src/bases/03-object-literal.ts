
interface Person {
    firstName: string;
    lastName: string;
    age: number;

    address: Address;
}

interface Address {
    city: string;
    zipCode: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zipCode: '12345'
    }
}

// const spiderman: Person = {
//     firstName: "Peter",
//     lastName: "Parker",
//     age: 26
// }

console.log(ironman);



//const spiderman = { ... ironman };

//spiderman.firstName = 'Peter';
//spiderman.lastName = 'Parker';
//spiderman.age = 26;

//console.log( ironman, spiderman);