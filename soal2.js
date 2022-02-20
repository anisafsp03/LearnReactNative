
const checkTypeNumber = (givenNumber) => {
    if(givenNumber%2 == 0)
    {
        return "bilangan genap"
    }else{
        return "bilangan ganjil"
        }
}

console.log(checkTypeNumber(2))
console.log(checkTypeNumber(5))