// const func = (n:number, m:number) => {
//     console.log(n,m)
//     return String(n*m)
// };
// const a: Array<String> = new Array(20);
// const x: Array<number> = [98, 98];
// a[3] = "ds";
// console.log(a);
// x.forEach((i) => {
//   i.toExponential;
// });

// OBJECT
// type typeOBJ = {
//   username: string;
//   age: number;
//   gender?: boolean;
// };
// const obj: typeOBJ = {
//   username: "ali",
//   age: 25,
// };
// const obj1 = {
//   username: "ali",
//   age: 25,
//   gender: true,
// };

// Function
// type functype = (n: number, m: number) => number;

// const func: functype = (n, m) => {
//   console.log(n, m);
//   return (n * m);
// };
// console.log(func(2,3))

// Function with Object
// interface Product {
//   productname: string;
//   price: number;
//   photo: string;
//   stock: number;
//   readonly id:string
// }

// type GetFuncDataType = (product: Product) => void;

// const getDate: GetFuncDataType = (products) => {
//     products.stock=76
//   console.log(products);
// };

// const Product1: Product = {
//   productname: "Mackbook",
//   price: 45,
//   photo: "photo sample",
//   stock: 73,
//   id:"fghjklsrefd"
// };
// getDate(Product1);

// Never Type
// const err = new Error();
// const errorHandler = () => {
//   throw new Error();
// };

// type theme = "light" | "dark";
// const mode:theme="light"

// -----------------------------------------------------

// Classes
// class Player {
//   readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }
//   myheight = () => this.height;
// }

// class newPlayer extends Player {
//   constructor(
//     height: number,
//     weight: number,
//     power: number,
//     public special: boolean
//   ) {
//     super(height, weight, power);
//   }
//   get getpower(): number {
//     return this.power;
//   }
//   set Setpower(val: number) {
//     this.power = val;
//   }
// }
// const Ali = new newPlayer(30, 23, 34, true);
// console.log("weight", Ali.weight);
// console.log("height", Ali.myheight());
// console.log("special", Ali.special);
// console.log("Id", Ali.id);
// console.log("power", Ali.getpower);
// Ali.Setpower=650
// console.log("power", Ali.getpower);

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   offer?: boolean;
// }

// interface GiveId {
//   getId: () => string;
// }

// class Product implements ProductType, GiveId {
//   private id: string = String(Math.random() * 1000);
//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
//   getId = () => this.id;
// }

// const product1 = new Product("Macbook", 2000, 20);

// ----------------------------------------------------------------

// Type Assertion

// const btn =document.getElementById("mybtn") as HTMLElement
// const btn =document.getElementById("mybtn")!
// const btn = <HTMLElement>document.getElementById("mybtn");
// btn.onclick;
// const myimg=document.getElementById("myimage") as HTMLImageElement
// myimg.src
// const myimg=document.querySelector("img")!
// myimg.src

// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e) => {
//   e.preventDefault();
//   const h2 = document.createElement("h2");
//   const body = document.querySelector("body")!;
//   const val = Number(myinput.value);

//   h2.textContent = String(val + 20);
//   body.append(h2)
// };

// interface Person {
//   name: string;
//   email: string;
//   // [key: string]: string;
// }
// const myObj: Person = {
//   name: "Amna",
//   email: "amna@gmail.com",
// };

// const getname = (): string => {
//   return myObj["name"];
// };
// const getemail = (): string => {
//   return myObj["email"];
// };
// const getData = (key: keyof Person): string => {
//   return myObj[key];
// };
// console.log("name: ", getname());
// console.log("email", getemail());
// console.log("data", getData("name"));

// ---------------------------------------------------------

// Utility Type

// Partial<type>

// type User = {
//   name: string;
//   email: string;
// };
// type User2=Partial<User>  // it indicate both values may be given or may be not

//  Required<type>  Opposite to partial

// type User = {
//   name?: string;
//   email?: string;
// };
// const user: Required<User> = {
//   name: "Qurat",
//   email: "qurat@gmail.com",
// };

//  Readonly<type>  - make every property readonly

// type User = {
//   name: string;
//   email: string;
// };
// const user: Readonly<User> = {
//   name: "Qurat",
//   email: "qurat@gmail.com",
// };

// Record<key,type>

// type User = {
//   name: string;
//   email: string;
// };
// type User2 = Record<"name" | "email", string>;

// // Pick<Type, key>;

// interface OrderInfo {
//   id: string;
//   user: string;
//   city: string;
//   zip_code: string;
//   country: string;
// }
// type ShippingInfo = Pick<OrderInfo,"user"|"country"|"city">

//  Omit<Type, key>;

// interface ShippingInfo {
//   id: string;
//   user: string;
//   city: string;
//   zip_code: string;
//   country: string;
// }
// type Random=Omit<ShippingInfo,"zip_code">

// Exclude<Type, ExcludedUnion>

// type MyTypes = number|string|boolean;
// type Random = Exclude<MyTypes,boolean>;

// Extract<Type, Union>

// type MyTypes = number|string|boolean;
// type Random = Extract<MyTypes,boolean>;

// NonNuullable<Type>

// type MyTypes = number | string | boolean | null | undefined;
// type Random = NonNullable<MyTypes>;
// type Random2 = Exclude<MyTypes, null | undefined>;

// Parameter<type>            - give parameters in array

// const myfunc = (a: number, b: string) => console.log(a + b);
// type Random = Parameters<typeof myfunc>;

// ConstructorParameter<type>            - give parameters in array

// class sampleClass {
//   constructor(a: string, b: string) {}
// }
// type random = ConstructorParameters<typeof sampleClass>;

// ReturnType<Type>

// const myfunc = (a: number, b: number): number => {
//   console.log(a + b);
//   return a;
// };
// type Random = ReturnType<typeof myfunc>;

// InstanceType<Type>

// class sampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type random = InstanceType<typeof sampleClass>;
// const user: random = {
//   s: "67",
//   t: "rameen",
// };

// ---------------------------------------------------------

// Generic

// const func = <CustomType>(n: CustomType): CustomType => {
//   return n;
// };
// let ans = func("33");
// let ans2 = func(3);
// let ans3 = func(true);

// interface Person {
//   name: string;
//   age: number;
// }

// const func = <T>(n: T): T => {
//   return n;
// };

// const Person1: Person = {
//   name: "Ali",
//   age: 20,
// };
// let ans = func(Person1);
// let ans2 = func<Person>(Person1);

// const func = <T, U>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };
// let ans = func<number, string>(3, "lol");

// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };
// let ans = func<number, number>(3, 78); // bcz U extends T thats's why we cannot send different datatype from T

// interface Person1 {
//   name: string;
//   age: number;
// }
// interface Person2 {
//   name: string;
//   age: number;
//   email: string;
// }
// const user1: Person1 = {
//   name: "ALi",
//   age: 23,
// };
// const user2: Person2 = {
//   name: "ALi",
//   age: 23,
//   email: "sdk@gmail.com",
// };
// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };
// let ans = func<Person1, Person2>(user1, user2);

type Person1 = {
  name: string;
  age: number;
};
const Details: Person1[] = [
  {
    name: "Asad",
    age: 71,
  },
  {
    name: "Kashif",
    age: 17,
  },
  {
    name: "Rameen",
    age: 37,
  },
  {
    name: "Raza",
    age: 34,
  },
];
const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  property:  U,
  value: T[U]
) => {
  return arr.filter((item) => item[property] == value);
};

const filteredPeopleByName = filterByPeoples(Details, "name", "Asad");
console.log(filteredPeopleByName)