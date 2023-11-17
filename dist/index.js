"use strict";
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
const form = document.getElementById("myform");
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const h2 = document.createElement("h2");
    const body = document.querySelector("body");
    const val = Number(myinput.value);
    console.log("input given", myinput.value);
    console.log("val", val);
    h2.textContent = String(val + 20);
    body.append(h2);
};
