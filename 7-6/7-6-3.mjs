const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
        // この例では処理が完了したことを返すだけなのでresolveには値を渡さない
        resolve()
        }, timeout)
    })
   

const promiseA = async () => 
{
    await promiseSetTimeout(2000)
    console.log("★", new Date())
    promiseB()
    await promiseSetTimeout(3000)
    console.log("◆", new Date())
}

const promiseB = async () => 
{
    await promiseSetTimeout(5000)
    console.log("end", new Date())
}

console.log("start", new Date())
promiseA()