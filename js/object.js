const myComputer = {
  name: "computer",
  price: 20000,
  color: "silver",
  model: "i77f1",
};

const keys = Object.keys(myComputer);
const values = Object.values(myComputer);

// for (let i = 0; i < keys.length; i++) {
//   const propertyName = keys[i];
//   const propertyValues = myComputer[propertyName];
//   console.log(propertyName, propertyValues);
// }

for (let propertyName in myComputer) {
  const propertyValues = myComputer[propertyName];
  console.log(propertyName, propertyValues);
}
