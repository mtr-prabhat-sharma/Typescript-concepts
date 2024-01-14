interface Person {
    name: string;
    age: number;
    contact_no?: number; // ? - question mark represent that this will may contain undefined value
}

// implementing typescript

const person: Person = {
    name: 'Jhon',
    age: 31
}
console.log(person) // { name: 'Jhon', age: 31 }