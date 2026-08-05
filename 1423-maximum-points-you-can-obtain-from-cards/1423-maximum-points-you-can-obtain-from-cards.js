/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let i
    lsum=0,rsum=0,maxSum=0
    for (i=0;i<k;i++){
        lsum=lsum+cardPoints[i]
        maxSum=lsum
    }
    let rIndex=cardPoints.length-1
    for(i=k-1;i>=0;i--){
        lsum=lsum-cardPoints[i]
        rsum=rsum+cardPoints[rIndex]
        rIndex--
        if (lsum+rsum>maxSum){
            maxSum=lsum+rsum
        }
        
    }
    return maxSum
    
};