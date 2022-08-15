// numbers in javascript plays an importnat rule
// limit in number
// let n=Number.MAX_SAFE_INTEGER
//  n=Number.MAX_VALUE
// console.log(n*20002); //Infinity
// n=Infinity
// n=-Infinity
// although you plus or minus in infinity it doesn't matter it will remain infinity
// console.log(n*Infinity)


// now let's write a program to test either a number is prime or not


function checkPrime(n) {
    // now chekc if number is 1 then return false
    if (n===1) {
        return false
    }

    // or  number is lesser that 4 then return true
    if (n<=3) {
        return true
    }

    // now if number is divisibel by 3 or 2 then it is also not prime
    if (n%2===0 || n%3==0) {
        return false
    }
    
    // now let's furthe divide continuously  to it square root
    let sqr=Math.floor(Math.sqrt(n))
    for (let i = 5; i < sqr; i+=6) {
        //because all prime number or the form of k6+-1 👈👌
        //if n is divisibe ny sqr then it not prime
        if (n%i===0 || n%(i=2)===0) {
            console.log(i);
            return false
        }
    }

    return true
}   

console.log(checkPrime(2274984892492419911111292221223882932819893298319));