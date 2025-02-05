import { sample2Model } from "./model.mjs"
const postSample2 = async (req, res) => 
{
    const name = req.body.name
    const age = req.body.age
    if (!name || !age)
    {
        return res.send(JSON.stringify({ status: "error" }))
    }
    const result = await sample2Model.insertOne(name, age)
    res.send(JSON.stringify({ status: "success", data: result }))
}

export const sample2Controller = 
{
    postSample2,
}