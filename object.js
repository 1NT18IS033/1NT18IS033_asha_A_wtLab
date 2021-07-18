//object creation
//3 ways
//1.Object literal - also called as object intializer
//let objName={p1:v1,p2:v2,.....,m1:function{}}

let emp = {
    name : 'asha',
    id: 16,
    sal:200000
}
console.log(emp);

emp['year of join']=2000
emp['']="empty string"
console.log(emp);





//2.Using object instances

let person= new Object()
person.name='xyz';
person.age=26

console.log(person);



//3. constructor function

function car(year,model,name)
{
    this.year=year;
    this.model=model;
    this.name=name;
}
let myCar=new car(2020,'abc','tesla');
console.log(myCar);

let cars={
    color:'white',
    wheels:4,
    year:2021,
    engines:{
        cylinders:4,
        size:2.2,
        model:'k2'
    }
}
console.log(cars.engines.model);




function carss(color,wheels,year,etype){
    this.color=color;
    this.wheels=wheels;
    this.year=year;
    this.etype=enginess;
}
function enginess(cylinders,size,model){
    this.cylinders=cylinders;
    this.size=size;
    this.model=model;
}
let e=new enginess(4,5.3,'ash');
let c=new carss('white',4,2021,e);

console.log(c);
console.log(e);