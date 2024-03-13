// const myComputer = {
//   name: "computer",
//   price: 20000,
//   color: "silver",
//   model: "i77f1",
// };

// const keys = Object.keys(myComputer);
// const values = Object.values(myComputer);

// for (let i = 0; i < keys.length; i++) {
//   const propertyName = keys[i];
//   const propertyValues = myComputer[propertyName];
//   console.log(propertyName, propertyValues);
// }

// for (let propertyName in myComputer) {
//   const propertyValues = myComputer[propertyName];
//   console.log(propertyName, propertyValues);
// }
// const color = "green";
// switch (color) {
//   case "white":
//     console.log("you are my white friend");
//     break;
//   case "blue":
//     console.log("you are my blue friend");
//     break;
//   case "red":
//     console.log("you are my red friend");
//     break;
//   case "yellow":
//     console.log("you are my yellow friend");
//     break;
//   case "green":
//     console.log("you are my green friend");
//     break;
//   default:
//     console.log("you are my black friend");
// }

// const foo = () => {
//   const foo = "foo";
//   return foo;
// };
// const bar = () => {
//   const bar = "bar";
//   return bar;
// };
// console.log(foo(bar()));

// const make_avg = (num1, num2, num3) => {
//   const average = num1 + num2 + num3;
//   return average;
// };

// console.log(make_avg(1, 2, 3));

// const make_avg = (numbers) => {
//   let sum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     sum += number;

//     // const average = se
//     // const average = number;
//     // console.log(i, number);
//   }
//   const average = sum / numbers.length;
//   return average;
// };
// const numbers = [4, 5, 6];
// console.log(make_avg(numbers));

// const make_age_average = (ages) => {
//   let sum = 0;
//   for (let i = 0; i < ages.length; i++) {
//     sum += ages[i];
//   }

//   const averageAge = sum / ages.length;
//   return averageAge;
// };

// const ageNumbers = [10, 20, 30, 40];

// console.log(make_age_average(ageNumbers));

// const odd_even = (number) => {
//   const even = number % 2 === 0;
//   if (even) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

// const number = 11;
// console.log(odd_even(number));

// switch (color) {
//   case "white":
//     console.log("you are my white friend");
//     break;
//   case "blue":
//     console.log("you are my blue friend");
//     break;
//   case "red":
const signal = "red";
switch (signal) {
  case "green":
    console.log("you should cross the road");
    break;
  case "red":
    console.log("danger situation");
    break;
  case "yellow":
    console.log("you should stop");
}
