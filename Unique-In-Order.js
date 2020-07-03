// uniqueInOrder = (iterable)=>{
//     let unique = []
//     for(var i = 0;i < iterable.length;i++){
//         let curr = iterable[i]
//         let next = iterable[i +1]
//         if(curr !== next){
//          unique.push(curr)
//         }
//     }
//     return unique
// }

// console.log(uniqueInOrder("AAABBCDEEFGGG"))


arrPlusArr = (arr1,arr2) =>{
    return arr1 + arr2
}
console.log(arrPlusArr([1,2],[1,1]))