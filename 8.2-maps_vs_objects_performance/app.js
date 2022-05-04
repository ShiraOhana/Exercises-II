// Setup:
// 1. Who can add key and value pairs faster in a for loop?
// • Create an empty Object and assign it to a variable.
// • Create a start timer for your object to be measured.
// • Create a for loop that will iterate a million times. Inside
// your for loop on each iteration create a new key, value
// pair to your object using the variable I.
// • Do the same procedure for a Map object.
// • Compare the times.
// You may be surprised from the results :)
// 2. Who can find faster a specific property from itself?
// Now that we populated 100000 properties to our
// object’s find the following:
// • Find out how long time would it take for the Object to
// find a specific property from itself.
// • Find out how long time would it take for the Map to find
// a specific property from itself.
// 3. Who is faster in adding a single entry?
// 4. Who is faster in deleting a single entry?

// 1
const obj = {};
const map = new Map();
let iterations = 1000000;
// console.time("iterate the object");
for (let i = 0; i < iterations; i++) {
  obj[i] = `object ${i}`;
}
// console.timeEnd("iterate the object");
// console.time("iterate the map");
for (let i = 0; i < iterations; i++) {
  map.set(i, `object ${i}`);
}
// console.timeEnd("iterate the map");
//2
// console.time("find item in an object");
obj[50000];
// console.timeEnd("find item in an object");

// console.time("find item the map");
map.get(50000);
// console.timeEnd("find item in a map");
//  3
// maps are faster much faster!
// console.time("adding item in an object");
obj.newItem = "new";
// console.timeEnd("adding item to an object");

// console.time("adding item to map");
map.set("newItem", "new");
// console.timeEnd("adding item to a map");
// 4
// maps are a bit faster (comapring to #3) !
console.time("deleting item from an object");
delete obj[100000];
console.timeEnd("deleting item from an object");
console.time("deleting item from a map");
map.delete("100000");
console.timeEnd("deleting item from a map");
