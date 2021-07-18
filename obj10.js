function comp(name,address){
    this.name=name||' ';
    this.address=address;
}
function emp(name,address,id,ph_no)
{
    this.p=comp;
    this.p(name,address);
    this.id=id||'';
    this.ph_no=ph_no;
}
let a=new emp("Asha","Yellapur",'33',948265467);
console.log(a);
