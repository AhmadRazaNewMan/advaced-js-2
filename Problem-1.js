//Count the occurrence of keys and convert the result into array of objects where each object belongs to one key and it's occurrence (count).
let data =[
    {language:"Javascript"},
    {language:"Javascript"},
    {language:"Javascript"},
    {language:"c++"},
    {language:"java"},
    {language:"java"}

]

let result = data.reduce((acc,curr)=>{
    if(acc[curr.language]){
        acc[curr.language] = acc[curr.language]+1
    }else{
        acc[curr.language] = 1
    }
    return acc
},{})
console.log(result)