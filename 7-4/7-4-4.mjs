const APlusB = (A, B) =>
{
    A += B
    return A
}
console.log("start", new Date())
setTimeout(() => 
{
    console.log(APlusB(15, 20), new Date())
    console.log("end", new Date())
}, 2000)