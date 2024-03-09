// function bringSingara(money) {
//   console.log("mama singara den");
//   console.log(money);
// }

// console.log(bringSingara(100));

// const bringSingara = (money) => {
//   console.log("mama singara den");
//   console.log(money);
// };

// console.log(bringSingara(100));

// const sum = (a, b, c, d) => {
//   console.log(a, b, c, d);
//   const sum = a + b + c + d;
//   return sum;
// };
// const a = 2;
// const b = 4;
// const c = 6;
// const d = 8;

// const addSum = sum(a, b, c, d);
// console.log(addSum);

const bringSingara = (money) => {
  const singaraPrice = 10;
  const quantity = money / singaraPrice;
  return quantity;
};

const money = 1000;
const getSingara = bringSingara(money);
console.log(getSingara);
