var numsArr = [190, 56, 92, 23, 200, 192]

// so searching is two types one for sorted which is more effiecient 🕖 O(log(n))
function binarySearch(arr,target) { //🛑 works only for sorted array
    if(arr.length<1) return -1
    let l=0;r=arr.length
    while(l<r){
        let mid=Math.floor((l+r)/2)
        if(arr[mid]===target){
            return mid
        }
        if(arr[mid]>target){
            r=mid-1;
        }else{
            l=mid+1
        }
    }
    return -1
}
// console.log(binarySearch(numsArr,231))
// console.log(binarySearch([],231))

// so let's solve some questions with the help of binary search
// 🕒 O(n) bad!-> find the square root of a positive interger without usign Math.sqrt() function
function squareRootInterger(n) {
    if(n==1 || n==0) return 1
    // so one approach is that comes to mind that we start from 1 and 1*1 ?= n and so on
    let start=1, square=1;
    while (square<n) {
        if (square==n) {
            break
        }
        start++;
        square=start*start
    }
    return start    
}
// console.log(squareRootInterger(9))
// console.log(squareRootInterger(16))
// console.log(squareRootInterger(256))

//so let's implement the optimal solution
function sqrInt(n) {
    if(n==1 || n==0) return 1
    let start=1, end=n, mid
    while (start<=end) {
        mid=Math.floor((start+end)/2)
        if(mid*mid==n){
            return mid
        }
        if(mid*mid<n){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    return mid
}


function sqrtFloat(float) {
    // so for float we took a closure of 0.1 as a base condition
    // float=9 ==> float/
    if(float==0 || float==1) return 1;
    let start=0,end=float,mid;
    while (end-start>0.1) {
        // calculate the mid
        mid=(start+end)/2
        if (mid*mid==float) {
            break
        }
        if(mid*mid>float){
            // means go for upper section
            end=mid
        }else{
            
            start=mid
        }
    }
    return mid

}
// console.log(sqrtFloat(4));
// console.log(sqrtFloat(49));
// console.log(sqrtFloat(900));
// console.log(sqrInt(256));
// console.log(sqrInt(1600));

function findSum(arr,target) { // elements must be consective
    var dict={}
    for (let i = 0,len=arr.length; i < len; i++) {
        // take the difference
        let diff=target-arr[i]
        if (dict[arr[i]]) {
            return [dict[arr[i]],i]
        }else{
            dict[diff]=i
        }
    }
    console.log(dict);
    return -1
}
// console.log(findSum([10,30,23],53))
// console.log(findSum([10,30,23,19,20],39))

//Q- find an element in array that appesrs only one in array and array is sorted
// so we can perform binary search since array is sorted form
function findOnlyOnce(arr,l,h) {
    // we have sorted array so we can perform binary search recursively
    if(l>h) return null
    if(l==h) return arr[l]
    let mid=Math.floor((l+h)/2)
    if (mid%2==0) { // array sould have atleast 2 elements
        if (arr[mid]===arr[mid+1]) {
            // so move upward further
            return findOnlyOnce(arr,mid+2,h)
    
        }else{
            return findOnlyOnce(arr,l,mid)
        }
    }else{
        if(arr[mid]==arr[mid-1]) return findOnlyOnce(arr,mid+1,h)
        else return findOnlyOnce(arr,l,mid-1)
    }
    
}
// let cArr=[2,2,4,4,4,5,5,5,5]
// console.log(findOnlyOnce(cArr,0,cArr.length));