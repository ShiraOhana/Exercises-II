let obj1 = { name: "Shira" };
let obj2 = { name: "Shir" };
let obj3 = { name: "Shi" };

const map = new Map([
  [obj1, "First"],
  [obj2, "Second"],
  [obj3, "Third"],
]);

// console.log(map);

for (const [key, element] of map) {
  console.log(key.name, element);
}
