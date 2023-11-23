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
const Details = [
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
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] == value);
};
const filteredPeopleByName = filterByPeoples(Details, "name", "Asad");
console.log(filteredPeopleByName);
