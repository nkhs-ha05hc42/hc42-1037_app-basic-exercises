const ar = ["A","B"]
const arrayPlusstr = (array, str) =>
{
    array.push(str)
    return array
}

const result = arrayPlusstr(ar, "C")
console.log(result)