// array are very importan in any programming language
// let's do solve some questions with the help of array

//1---------------- Find the two numbers is array whose sum is equal to the given number and indexes are consutive and array contians positive numbers
function findSumNumbers(arr,target) {
    const hashTable={}

    // the logic is this if the difference of target-number is equal to previous number return that two indexes
    for (let i = 0,len=arr.length; i<len; i++) {
        let currentElm=arr[i]
        let diff=target-currentElm

        if (hashTable[currentElm]) {
            return [(hashTable[currentElm]),i]
        }
        else{
            hashTable[diff]=i
        }
    }
    
    return -1
}

// console.log(findSumNumbers([2,3,4],7)); // 1,2 
// console.log(findSumNumbers([12,23,14,20],34)); // 2,3
// console.log(findSumNumbers([2,3,9,10,14,20],34)); // 4,5


//-------- 2-- implement array.slice() function from scratch

function spliceArr(arr,startIndex,endIndex) {
    if (!startIndex && !endIndex) {
        return arr
    }
    if (!endIndex) {
        endIndex=arr.length
    }
    let slicedArr=[]
    for (let i = startIndex; i<endIndex; i++) {
        slicedArr.push(arr[i])
    }
    return slicedArr
}

// console.log(spliceArr([11,22,33,44],1,2));
// console.log(spliceArr([11,22,33,44],1));
// console.log(spliceArr([11,22,33,44]));

//3---------- FIND THE COMMON ELEMENTS THAT ARE PRESENT IN K-ARRAYS
function findCommonElm(kArr) {
    let hashTable={},answer=[]
    // start  the opening array
    for (let i = 0,leng=kArr.length; i < leng; i++) {
        // now skip if two numbers are same
        let cArr=kArr[i]
        let last=null
        for (let j = 0; j < cArr.length; j++) {
            let cElm=cArr[j]
            if (last!==cElm) {
                // now check if hashtable has it's count already
                if (!hashTable[cElm]) {
                  hashTable[cElm]=1  
                }else{
                    hashTable[cElm]++
                }
            }
            last=cElm
        }
    }

    // now hashtable have all counts of numbers so check if it is present in every array
    for (const key in hashTable) {
        if (hashTable[key]===kArr.length) {
            answer.push(key)
        }
    }
    return answer
}

//test it
// console.log(findCommonElm([[1,2],[2,3,1],[1,2,4]]))


function findSumBetter(arr,target) {
    var len=arr.length
    if (len===0) return -1
    // now logic is that target-currentElm should be equal to the next one
    for (let i = 0; i < len; i++) {
        let cElm=arr[i]
        let diff=target-cElm
        if (diff==arr[i+1]) {
            return [i,i+1]
        }   
    }
    return -1
}
// console.log(findSumBetter([10,22,44,19,20,30],39))


//4------------ CALCUALTE  THE MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE
function findMedian(arr) {
    // check length of array is it even or odd
    let isEven=arr.length%2===0?true:false
    if (!isEven) {
      return arr[Math.floor(arr.length/2)]
    }
    return (arr[Math.floor(arr.length/2)]+arr[Math.floor((arr.length-1)/2)])/2

}


function findMediansOfTwoArr(arr1,arr2,size) {
    if (size===0) {
        return -1
    }
    if (size===1) {
        return Math.floor((arr1[0]+arr2[0])/2)
    }
    if (size==2) {
        let ans= (Math.max(arr1[0],arr2[0])+Math.min(arr1[1],arr2[1]))/2
        return ans
    }
    let lMedian=findMedian(arr1)
    let rMedian=findMedian(arr2)
    console.log(lMedian);
    console.log(rMedian);
    return Math.floor((lMedian+rMedian)/2)

}
let arr1=[11,13,15,19] 
let arr2=[12,18,24,31]
let size=4
console.log(findMediansOfTwoArr(arr1,arr2,size));
