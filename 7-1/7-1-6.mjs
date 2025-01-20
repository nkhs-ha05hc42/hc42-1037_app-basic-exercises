const rimit100 = (num) =>
{
    if(num < 100)
    {
        num *= 2
        num = rimit100(num)
    }
    return num
}

const result1 = rimit100(10)
const result2 = rimit100(25)
console.log(result1 + "," + result2)