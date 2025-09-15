

function greet( name:string ): string {
    return `Hola ${name}`
}

const greet2 = ( name:string): string => {
    return `Hola ${name}`
}

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface User {
    uid: string;
    username: string;
}

function getUser(): User {

    return {
        uid: 'ABC-123',
        username: 'El_Papi1502'

    };
}

const getUser2 = () => ({ //los parentesis indica que hace un return implicito del objeto
    uid: 'ABC-123',
    username: 'El_Papi1502'
});

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach ( (value) => {
    console.log({value})

})

