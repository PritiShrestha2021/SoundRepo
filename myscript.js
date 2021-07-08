console.log("hello !");

function sum(x, y) {
  //console.log("this is basic function");
  console.log(x + y);
}

sum(1, 3);
sum(2, "priti");

const name = "Ayana";
console.log(`My name is ${name}`);
console.log("My name is " + name);
console.log("My name is ", name);

// Defining object
const obj = {
  a: "aname",
  b: "age",
  c: "address"
};
//Arrow function
const sum1 = ({ a, b, c }) => {
  console.log("abc");
  console.log(a);
};

sum1(obj);

const displayname = name => {
  return name;
};
console.log(displayname("RAM"));

// Defining object
// const obj = {
//   a: "name",
//   b: "age",
//   c: "address"
// };

// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);

const obj1 = {
  name: "priti"
};
const obj2 = {
  address: "sanepa"
};
const arr = [obj1, obj2];
console.log(arr);
console.log(arr[0]);
console.log(arr[0].name);

const arr1 = [
  {
    name: "susan",
    address: "teku",
    phone: 9855522364
  },
  {
    college: "asaian",
    address: "thimi",
    phone: 983232232
  }
];

console.log("phone_number: ", arr1[0].phone);

const ob = {
  a: ["name", "address"],
  b: ["susan", "teku"]
};

console.log(`${ob.b[0]}`, "'s ", `${ob.a[1]}`, "is ", `${ob.b[1]}`);
//susan's address is teku
