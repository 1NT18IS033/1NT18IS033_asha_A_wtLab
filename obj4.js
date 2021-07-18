//this
//old js

var person = {
    name:'asha',
    age:20,
    sayDetails:function()
    {
        console.log('Name is ' +this.name+' age is '+this.age)
        that=this
        sayAgain=function()
        {
            console.log('Name is ' +that.name+' age is '+that.age)//if we write this.name then output will be undefined so we will use reference variable
        }
        sayAgain()
    }
}
person.sayDetails();

//ES-6
let user = {
    name:'asha',
    age:20,
    sayDetails:function()
    {
        console.log('Name is ' +this.name+' age is '+this.age)
        //that=this
        sayAgain=()=>
        {
            console.log('Name is ' +this.name+' age is '+this.age)
        }
        sayAgain()
    }
}
user.sayDetails();