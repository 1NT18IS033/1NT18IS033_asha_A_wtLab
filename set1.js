//set
let mySet = new Set()//empty set

let set1= new Set([1,2,3,4,5,'string',{"objectKey":"ObjectValue"}])
console.log(set1.entries());

if(set1.has('string')){
    set1.delete('string')
}
else{
    set1.clear()
}
console.log(set1.entries())

set1.add(78);
console.log(set1.entries())
console.log(set1.size)
console.log(set1.values())
console.log(set1.keys())

for (let i of set1.values()){
    console.log(i)
}

//converting to array

let set2 = new Set([3,56,'a string'])
console.log(set2)
let a1=[...set2]//destructuring (...)
console.log(a1)

//converting into sets

let a2=[45,67,23,90]
let setConv=[...new Set(a2)]
console.log(setConv)// it will not show in the set format but it will convert array to set

//to remove duplicate elements from array
let a3=[2,2,3,4,6,4,3,2,1,6]
//2 ways
//1st way
let a3Set=Array.from(new Set(a3))//if we want in the array only then use this method
console.log(a3Set)

//2nd way
let s3=new Set(a3)
console.log(s3)//it will display in the set format so conver it back to array
let a4=[...s3]
console.log(a4)

//performance efficiency

let a=[],s=new Set()
let b=[1,2,5,6,3]

for(let i=0;i<b.length;i++)
{
    console.time('Array')
    a.push(b[i])
    console.timeEnd('Array')
    console.time('Set')
    s.add(b[i])
    console.timeEnd('Set')
}//set is effecient


//creating objects and adding object values to a set
let s1=new Set()
let ob1={id:1,name:'asha'}
let ob2={id:2,name:'abc'}
s1.add(ob1)
s1.add(ob2)
console.log(s1)

let m=new Map()
m.set(ob1,ob2)
console.log(m)




//demonstrate the map and set data structures with all the methods
//compare the performane b/w set and map
//how to convert object into map
//perform one of the set operation(union,intersection)


//union and intersection operation on sets
let sets1=new Set([15,7,90]);
let sets2=new Set([34,8,9,15]);
let union=new Set([...sets1,...sets2])
console.log("Union")
console.log(union);
let intersection=new Set([...sets1].filter(x=>sets2.has(x)))
console.log("Intersection")
console.log(intersection)

