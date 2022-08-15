

/**
 * 3- O(n^2) mean exponential  it is also the bad time complexity
 * // for as the number of input increeases the time complexity increase by it's square
 */


/**
 4-- O(nlogn) means that logn * o(n) time complexity
 major example of this time complexity is merge sort algo!!!
 */

 function merge_sort(arr,start,end) {
    // basically mergesort works on divide and conquer rule split that array into right half and left half and so on until the length of array is 1 b/c array of length 1 is already sorted it's no longer no need to be sort

   if (start>=end) {
    return
   }

    // otherwise calcualate the mid every time and divide array 
    let midIndex=Math.floor((start+end)/2)
    merge_sort(arr,start,midIndex)
    merger(arr.slice(start,midIndex),arr.slice(midIndex,end+1))
    merger()

 }
function merger(lArr,rArr){

    let sortedArr=[]
    let leftIndex=0
    let rightIndex=0
    while (leftIndex<lArr.length && rightIndex<rArr.length) {
        /// we will compare and fill the array
        if (lArr[leftIndex]< rArr[rightIndex]) {
            sortedArr.push(lArr[leftIndex])
            leftIndex++
        }
        else{
            sortedArr.push(lArr[rightIndex])
            rightIndex++
        }
    }
    // if it's one of index ended then fill the remaining array 
    sortedArr=sortedArr.concat(lArr.slice(leftIndex),rArr.slice(rightIndex))
    console.log(sortedArr);
}

let arr=[5,3,9,7,2]
merge_sort(arr,0,arr.length-1)
// function fabonaci(n) {
//     let arr=[]
//     if (n==0) {
//         arr=[1]
//         return
//     }
//     if (n==1) {
//         arr=[1,1]
//         return
//     }
//     arr=[1,1]
//     // else sum tha last two numbers of arr
//     for (let i = 2; i < n; i++) {
//         // sum last two numbers and push to arr
//         arr.push(arr[arr.length-1]+arr[arr.length-2])
//     }
//     return arr
// }
// console.log(fabonaci(9))
// merge Sort is all about recursion ant it's time complexity is O(nlogn)

// for example here  it is
// function recursion(n) {
//     if (n===1) {
//         return 1
//     }
//     recursion(n-1)
//     console.log(n);
// }

// let n=5
// console.log(recursion(n));