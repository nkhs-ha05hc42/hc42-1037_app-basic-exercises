import { query } from "../../db/manager.mjs"

const insertOne = async (name, age) => 
{
    const insertQuery = `
        INSERT INTO users(
            name,
            age,
            is_disabled
        )
        VALUES(
            $1,
            $2,
            true
        )
        RETURNING *;
    `
    const result = await query(insertQuery, [name, age])
    return result.rows.at(0)
}

export const sample2Mode1 = 
{
    insertOne,
}