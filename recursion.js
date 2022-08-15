/* recursion is of usually two types 
1 - Linear Recursion (which means that function is calling itself only one time)
2 - Tree Recursion (which means that function is calling itself more than one time)

---------RECUSIVE FUNCTION HAVE TWO MAJOR PARTS-----------
1-- base condition - terminate or end calling itself
2-- divide & conquer rules to update the call of function with new parameters
*/

// let's code a simple countdown recusive function
function countDown(n) {
    if(n<1) return
    console.log(n);
    countDown(n-1)
}
let n=5
// countDown(n)
// time compexit is O(n) b/c as the n increase the call level of function and stack memory aslo increase linearly

// let's code a linear search recursive function 
function linearRecursiveApproach(arr,key) {
    let end=arr.length
    function helper(start) {
        if(start>end) return -1
        if(arr[start]===key) {
            return start
        }
        start++;
         return helper(start)
    }
    return helper(0)
}

// let arr=[23,45,90,19,24,21]
// let key=24
// console.log('found  index ',linearRecursiveApproach(arr,key))

// let's code a fabonacci series recursively which will return the nth term of fabonacci series
// 1 1 2 3 5 8 13 21 34 55 

function fabonacci_non_optimized(n) {
    if (n<=1) {
        return n
    }
    return fabonacci_non_optimized(n-1)+fabonacci_non_optimized(n-2)
}

// console.log(fabonacci_non_optimized(10))
// console.log(fabonacci_non_optimized(9))

//❌❌❌ Hoverver this is not optimized at all becasue it has the time complexit of O(n!) if no of input increase the most of the rebundacy functions are on the call stack and causes overflow

function fabanacci_better(n,lastlast,last) {
    if (n===0) {
        return lastlast
    }
    if(n===1) return last
    return fabanacci_better(n-1,last,last+lastlast)
}

// console.log(fabanacci_better(10,0,1))
// console.log(fabanacci_better(9,0,1))
// console.log(fabanacci_better(1000,0,1))

//✅ above function is more optimized even 1000 term is returning as but i tried online whose limit it only upto 250 term !😋


// now let's do some problems related recursion

//1-------- PLAINDROME STRINGS ---> racecar , kayak, deified, civic, radar, level, rotor
// idea is that even if u reverse string the strign will remains same

function checkPlainDrome(string) {
    function plainDromeHelper(string,start,end) {
        if(start>end) return true
        // otherwise compare each starting and end letter
        if (string.charAt(start)!==string.charAt(end)) {
            return false
        }
         return plainDromeHelper(string,start+1,end-1)
    }
    
    return plainDromeHelper(string,0,string.length-1)
}

// console.log(checkPlainDrome('dad'))
// console.log(checkPlainDrome('face'))
// console.log(checkPlainDrome('racecar'))

// 2nd way a bit leaner
function checkPDAlter(string) {
    if (string==='' || string.length<=1) {
        return true
    }
    // othewise slice the string from start and end
    if (string.charAt(0)!==string.charAt(string.length-1)) {
        return false
    }
    return checkPDAlter(string.substring(1,string.length-1))
}
// console.log(checkPDAlter('dad'))
// console.log(checkPDAlter('face'))
// console.log(checkPDAlter('racecar'))



// Q --  convert a decimal number to binary
function convertBinary(decimal) {
    let binaryString=''
    // so idea is continuously divied by 2 and store the remainder
    function binaryHelper(decimal) {
        if (decimal<2) {
            return binaryString+=decimal
        }else{
            binaryHelper(Math.floor(decimal/2))
            binaryHelper((decimal%2))

            // console.log(Math.floor(decimal/2));
            // otherwise divide by 2 and store it string
            // let rem=decimal%2
            // binaryString+=rem
        }

    }
    binaryHelper(decimal)
    return binaryString
}

// console.log(convertBinary(20))


//Q -- write a program for converting nested objects to a flatten object
/**
    {
        a:1,                       
        }
        b:{               
            c:2        
        }
    }
    👇
     {
      a:1,
      'b.c':2
    }

 */
