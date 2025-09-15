
const characterName = ['Goku', 'Vegeta', 'Trunks'];


const [ , , trunks ] = characterName;

console.log({ trunks });

const returnArrayFn = () => {

    return ['ABC', 123] as const;
}

const [ letters, numbers ] = returnArrayFn();

console.log(letters, numbers);



const useState = (value1: string) => {

    return [ value1, (value2: string) => {console.log(value2)}] as const;
};


const [ name, setName ] = useState('Goku');

console.log(name);
setName('Vegeta');






