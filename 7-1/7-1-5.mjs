const txt_ob = (ja1, en1) =>
{
    const dat1 =
    {
        ja: ja1,
        en: en1
    }
    return dat1
}

const ja_en = (ja2, en2) =>
{
    result = txt_ob(ja2, en2)
    return result
}

const result = txt_ob("リンゴ", "apple")
console.log(result)