let obj = {
    name:"rohit",
    age:10,
    apple:1,
}
// console.log(obj.hasOwnProperty("name"));

let curr = "orange";
// console.log(obj.hasOwnProperty(curr));
// obj.apple = 1;
// obj["apple"]=1;
// obj[curr] = 1;

if(obj.hasOwnProperty(curr))
    obj[curr]++;
else
   obj[curr]=1;

console.log(obj);

