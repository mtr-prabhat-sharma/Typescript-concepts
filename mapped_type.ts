interface Person {
  name: string;
  age: number;
}

// Use a mapped type to make everything readonly
type ReadonlyPerson = {
  [Key in keyof Person]: Readonly<Person[Key]>;
};

// Example usage
const user: ReadonlyPerson = {
  name: "John",
  age: 21
};
user.name = "Kevin"; // ❌ Error: Cannot assign to 'name' because it is a read-only property

// Build in Mapped Types
1. Partial<T> : Makes all properties optional.
  
  interface User {
  id: number;
  name: string;
  email: string;
}

const u1: Partial<User> = { name: "John" }; 

2. Required<T>: Makes all properties required (opposite of Partial).
  interface User {
  id?: number;
  name?: string;
  }

const u2: Required<User> = { id: 1, name: "Prabhat" }; // ✅ Must provide all properties

3. Readonly<T> : Makes all properties readonly. We can't change them.
  interface User {
  id: number;
  name: string;
}

const u3: Readonly<User> = { id: 1, name: "Prabhat" };

u3.name = "Sharma"; 
// ❌ Error: Cannot assign to 'name' because it is a read-only property

4. Pick<T, K> : Creates a type with subset of properties. Here T is type and K are the properties which is to be taken.
  interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">;
const u4: UserPreview = { id: 1, name: "John" };
// ✅ Only 'id' and 'name' are allowed

5. Omit<T, K> : Creates a type with all properties except the specified ones.
  interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;
const u5: UserWithoutEmail = { id: 1, name: "John" };
// ✅ 'email' excluded

