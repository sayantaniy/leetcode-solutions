/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    //step 1 : create a new map 
    let map = new Map()

    //step 2: iterate through nums array
    for (let num of nums){

        //step 3: set key value pair (key:frequency)
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    //step 4: create an array bc map is an obj
    let arr = [...map.entries()] 

    //step 5: sort the array in descending order, by values so a[1], second pos
    arr.sort((a,b)=>b[1]-a[1])

    //step 6: print the highest freq till k
    let result = []
    for (let i =0;i<k;i++){

        result.push(arr[i][0])

    }

    //step 7: print result
    return result
    
};