// Big O have some common notations
/*1-- ⭕(n) for linear time
it means that as the number of input (n) grows the time complexity of alogrithim also increase linearly
basic example is iterate an array linaearly one by one
Linear search

2---- ⭕(logn)  is a bit cleaner or more effiecent
it measn that as the number of input increase the algorthim time increase with log(n)
for example if n=4 then log(4)=2 as in programmig there is always base of log is 2
Binary Search
👉 to apply Binary Search array must be sorted otherwise it is not possible

3-- ⭕(n^constact) is the time complexity  of nested loops
for example if loop contains one more loop inside the time complexity is O(n^2)
*/

function binarySearch(arr,start,end,target) {
    // if whole array is ends then
    if (start>end) {
        console.log('Not found!');
        return -1
    }
    // split the array
    let mid=Math.floor((start+end)/2)

    // if the target is exact middle then
    if (arr[mid]===target) {
        console.log('Number found at index',mid);
        return
    }
    // and if number > mid then number must be right half so shift the start
    if (target>arr[mid]) {
        start=mid+1
    }
    else{
        end=mid-1
    }
    
    // now call binary search again for the next half slice of array
    binarySearch(arr,start,end,target)
}

function linearSearch(arr,target) {
    let foundIndex=-1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===target) {
            foundIndex=i
            return foundIndex
        }
    }
    return -1
    
}
let arr=[15,17,18,19,23,28]

// let creata a massive array
let arr2=[]
for (let i = 0; i < 20000000; i++) {
    arr2[i]=i
}
let target=19989923

let t1=performance.now()
// view the difference
// console.log(binarySearch(arr2,0,arr2.length-1,target))
// 
// console.log(linearSearch(arr2,target))


let t2=performance.now()

console.log(`Total Time took is ${t2-t1} miliseconds`);

// COLCUSTION
/**
 * ⭕log(n) is 👌✔ than ⭕(n)
 */

/**
 * RULES
 * 1-- WHILE calulatiing we igonre contants for example if time complexity is
 * o(n+2n) then it will be considerd as O(n)
 */