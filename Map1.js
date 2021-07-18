//map
let capitals= new Map() //empty map
capitals.set('Bangalore','KA');
capitals.set('Mumbai','MH');
//capitals.set('Bangalore','MY'); value must be unique
console.log(capitals)

console.log(capitals.size);
console.log(capitals.get('Bangalore'));
console.log(capitals.has('Delhi'));//has returns true or false it will check the key is present or not
console.log(capitals.has('Mumbai'));

// capitals.delete('Bangalore');
// console.log(capitals);
// //delete key word eill delete the specified key
// //clear will delete all the values in the map
// capitals.clear();
// console.log(capitals);

let a=capitals.entries()
console.log(a);

let b=capitals.keys()
console.log(b);

let c=capitals.values()
console.log(c);

for(let [key,value] of capitals)
{
    console.log(key+' is capital of '+value)
}

 capitals.delete('Bangalore');
console.log(capitals);
// //delete key word eill delete the specified key
// //clear will delete all the values in the map
 capitals.clear();
 console.log(capitals);


let obj=new Object();
console.log(obj instanceof Map)

let m =new Map()
console.log(m instanceof Object)



//performance efficiency
let arr=[],n=new Map();
let arr2=[1,2,3,4,6,56];
for(let i=0;i<arr2.length;i++){
    console.time('Array')
    arr.push(arr2[i])
    console.timeEnd('Array')

    console.time('Map')
    n.set(arr2[i])
    console.timeEnd('Map')
}
console.log(arr)
console.log(n)