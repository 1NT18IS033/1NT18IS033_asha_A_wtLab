//getter and setter

var obj = {
    a:7,
    get b()
    {
        return this.a+1;
    },
    set c(x)
    {
        this.a=x/2;
    }
}

console.log(obj.a,obj.b);
obj.c=50;
console.log(obj.a,obj.b)