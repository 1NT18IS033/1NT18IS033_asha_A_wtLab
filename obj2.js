//object literal
let car ={
    color:'white',
    year:2019,
    display:function()
    {
        console.log(`The car is ${this.color} in color and purchased in the year ${this.year}`);
    }
}
car.display();


//2. object instance

let person=new Object();
person.age=45;
person.name='asha';
person.display=function()
{
    console.log(`My name is ${this.name}`)
}
person.display();

//3. constructor function

function emp(fname,lname,sal)
{
    this.fname=fname;
    this.lname=lname;
    this.sal=sal;
    this.display=function()
    {
        console.log(`Name is ${this.fname} ${this.lname}`)
    }
    this.dis=dis1;
}
function dis1(){
    console.log(`salary is ${this.sal}`);
}

let e=new emp('Asha','Madguni',100000)
e.display();
e.dis();