const myComputer = {
  name: "computer",
  price: 20000,
  color: "silver",
  model: "i77f1",
};

const myComputerKeys = Object.keys(myComputer);
const price = myComputer.price;
myComputer.price = 50000;
console.log(myComputer);
