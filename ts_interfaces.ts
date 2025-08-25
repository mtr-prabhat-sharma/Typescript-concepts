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

// Partial is a built-in utility type in TypeScript.
// It takes an interface (or type) and makes all of its properties optional.

interface User {
  name: string;
  age: number;
}

let u2: Partial<User> = {
  name: "Prabhat", // ✅ only 'name'
};

let u3: Partial<User> = {
  age: 22,         // ✅ only 'age'
};
