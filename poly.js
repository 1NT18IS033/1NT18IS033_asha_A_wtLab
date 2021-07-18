class Animal{
    constructor(name)
    {
        this.name=name
    }
    makesound()
    {
        console.log("Generic sound")
    }
}
class Dog extends Animal{
    constructor(name)
    {
        super(name)
    }
    makesound()
    {
        console.log("woof woof");
    }
}
class Cat extends Animal{
    constructor(name)
    {
        super(name)
    }
}
let d1= new Animal()
//d1.makesound();
let d2=new Dog()
d2.makesound();