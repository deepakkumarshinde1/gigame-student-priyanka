let set = new Set([10, 20, 30, 30, 30, 30, 30]);
set.add(10);
set.delete();
set.clear();
set.has();
// set.size();
// set.forEach();
console.log(set);

let map = new Map();
map.set("name", "Deepakkumar");
map.set(undefined, "yes");
map.get(true);
map.delete("name");
map.clear();
// map.forEach();
// map.size();

console.log(map);
console.clear();
let array = [10, 20, 30];
let itr = array[Symbol.iterator]();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

let itr1 = {
  data: [],
  [Symbol.iterator]() {
    let array = this.data;
    let index = -1;
    return {
      next() {
        index++;
        if (array[index] === undefined) {
          return { value: undefined, done: true };
        }
        return { value: array[index], done: false };
      },
    };
  },
};
console.clear();
itr1.data = [10, 20];
let newItr = itr1[Symbol.iterator]();
console.log(newItr.next());
console.clear();
for (const key in itr1) {
  console.log(key);
}
