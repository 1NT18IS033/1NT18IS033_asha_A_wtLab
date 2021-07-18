//global scope
let a='lab';
function concat(a1)
{
    return function(a2){
        return function(a3){
            //outer function scope
            return function(a4){
                //local scope
                return a1+a2+a3+a4+a;
            }
        }
    }
}
console.log("Concatenated string is: ");
console.log(concat('web')('tech')('no')('logy'));