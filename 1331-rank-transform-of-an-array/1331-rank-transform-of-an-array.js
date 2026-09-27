/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let copy = [...arr]
    let res = []
    let map = new Map()
    arr.sort((a,b)=>a-b)
    let set = new Set(arr)
    sortArr = [...set]
    
    for(let i=0;i<sortArr.length;i++){
        map.set(sortArr[i],i+1)
    }
    
    for(let i=0;i<copy.length;i++){
        res.push(map.get(copy[i]))
    }

    return res
};