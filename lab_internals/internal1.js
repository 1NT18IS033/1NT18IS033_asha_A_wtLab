function sumOfArray(array1,array2)
{
    res = [];
    i=0;
    x=0;
    while(i<array1.length && i<array2.length)
    {
        res[i]=array1[i]+array2[i];
        i++
    }
    if(i==array1.length)
    {
        for(x=i;x<array2.length;x++)
        {
            res.push(array2[x]);
        }
    }
    else{
        for(x=i;x<array1.length;x++)
        {
            res.push(array1[x]);
        }
    }
    return res;
}

console.log(sumOfArray([2,0,3,3,4],[3,4,6,6,3,1]));