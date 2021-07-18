const person = {
    prop : 'hello',
    fun : function(){
        console.log("I am a person")
    }
}
const me=Object.create(person)

me.prop ='bye bye'
me.name='asha'

console.log(me)
console.log(person)
console.log(me.hasOwnProperty('name'))
console.log(person.hasOwnProperty('name'));

function c(){
    c.prototype.meth1 = function(){//or this.methd1
        console.log("This is c")
    }
}
let c1 = new c()
c1.meth1()

class c1{//class will replace the constructor function
    constructor(){//setup the object
        //instance properties -- unique for each object

    }
    //instance methods
    meth1(){

    }
}

let cc1=new c1()
let cc2=new c1()