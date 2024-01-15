// Generic function that takes an argument of type T
function identity<T>(arg: T): T {
    return arg;
  }
  
  // Using the generic function with different types
  let result1: number = identity<number>(42); // Type of result1 is number
  let result2: string = identity<string>('Hello, generics!'); // Type of result2 is string
  
//   The T is a type parameter. It's a placeholder for a specific type that will be provided when the function is called. 
//   This allows you to create a function that can work with different types without specifying the exact type in the function 
//   definition.

// When calling the function, you can explicitly specify the type using angle brackets (<>) or let TypeScript infer the type 
// from the argument.