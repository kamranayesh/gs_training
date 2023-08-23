// variables.ts
// tsc filename.ts
// types : implicit
const a = 10;
// types : explicit
const b: string = "test";
const t: number = JSON.parse("10");
// unions
const c: number | string = "test";
// enums
enum Month {
  Jan,
  Feb,
  March,
  April,
}
const m: Month = Month.Feb;
// user-defined types
type User = {
  name: string;
  age: number | string;
  email?: string;
};
const u: User = {
  name: "test",
  age: 12,
};

// intersection
type PersonDetails = {
  name: string;
  dob: Date;
};
type ContactDetails = {
  email: string;
  phone: number;
};
type Identity = {
  id: number;
};
// intersections are used to combine types to form a new type
type Customer = PersonDetails & ContactDetails;
type Employee = PersonDetails & ContactDetails & Identity;

// const cust:Customer = {};
// const emp:Employee ={};

// type casting
const element = document.querySelector("input") as HTMLInputElement;
const ele = <HTMLImageElement>document.querySelector("img");
