let loopcount = 0
let sum = 0
for(let i = 1; i <= 100; i++)
{
    sum = sum + i
    loopcount++
    if(sum > 50)
    {
        break
    }
}
console.log("ループ回数:" + loopcount + ",合計数:" + sum)